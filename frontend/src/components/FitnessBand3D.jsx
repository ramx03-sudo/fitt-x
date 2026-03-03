import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

function MinimalBand({ isDark, mouse }) {
    const groupRef = useRef();
    const innerRef = useRef();

    // Smoothed target rotation from mouse
    const targetX = useRef(0);
    const targetY = useRef(0);
    const currentX = useRef(0);
    const currentY = useRef(0);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        // Update targets from mouse position (-1 to 1 range → subtle tilt)
        targetX.current = mouse.current.y * 0.4;  // tilt up/down
        targetY.current = mouse.current.x * 0.6;  // tilt left/right

        // Smooth lerp toward target
        currentX.current += (targetX.current - currentX.current) * 0.05;
        currentY.current += (targetY.current - currentY.current) * 0.05;

        if (groupRef.current) {
            // Auto spin + mouse-driven tilt layered on top
            groupRef.current.rotation.y = t * 0.2 + currentY.current;
            groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.1 + currentX.current;
        }
        if (innerRef.current) {
            innerRef.current.rotation.y = -t * 0.1;
        }
    });

    return (
        <group ref={groupRef} scale={1.3} rotation={[0.4, 0, 0]}>
            {/* Outer clean wireframe */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.5, 0.35, 32, 100]} />
                <meshBasicMaterial
                    color={isDark ? "#ffffff" : "#000000"}
                    wireframe
                    transparent
                    opacity={0.15}
                    depthWrite={false}
                />
            </mesh>

            {/* Inner solid band */}
            <mesh ref={innerRef} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.5, 0.1, 16, 100]} />
                <meshBasicMaterial
                    color="#86868b"
                    wireframe
                    transparent
                    opacity={0.35}
                    depthWrite={false}
                />
            </mesh>

            {/* Scanning minimal ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.2, 0]}>
                <torusGeometry args={[1.6, 0.015, 4, 100]} />
                <meshBasicMaterial
                    color={isDark ? "#ffffff" : "#000000"}
                    transparent
                    opacity={0.85}
                    depthWrite={false}
                />
            </mesh>
        </group>
    );
}

export default function FitnessBand3D() {
    const { isDark } = useTheme();

    // Shared mouse ref — normalized -1 to 1
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouse.current = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -((e.clientY / window.innerHeight) * 2 - 1),
            };
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', zIndex: 10 }}>
            {/* Glow backdrop */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '300px', height: '300px',
                background: 'radial-gradient(circle at center, var(--glow-color) 0%, transparent 70%)',
                filter: 'blur(40px)', zIndex: -1
            }} />

            <Canvas camera={{ position: [0, 0, 7], fov: 40 }} gl={{ alpha: true }}>
                <Float speed={1.5} rotationIntensity={0} floatIntensity={0.3}>
                    <MinimalBand isDark={isDark} mouse={mouse} />
                </Float>
            </Canvas>
        </div>
    );
}
