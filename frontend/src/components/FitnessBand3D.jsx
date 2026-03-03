import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

function MinimalBand({ isDark }) {
    const groupRef = useRef();
    const innerRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y = t * 0.2;
            groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
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
                    blending={THREE.NormalBlending}
                    depthWrite={false}
                    depthTest={true}
                />
            </mesh>

            {/* Inner solid band */}
            <mesh ref={innerRef} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.5, 0.1, 16, 100]} />
                <meshBasicMaterial
                    color="#86868b"
                    wireframe
                    transparent
                    opacity={0.3}
                    blending={THREE.NormalBlending}
                    depthWrite={false}
                    depthTest={true}
                />
            </mesh>

            {/* Scanning minimal ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.2, 0]}>
                <torusGeometry args={[1.6, 0.015, 4, 100]} />
                <meshBasicMaterial
                    color={isDark ? "#ffffff" : "#000000"}
                    transparent
                    opacity={0.8}
                    blending={THREE.NormalBlending}
                    depthWrite={true}
                    depthTest={true}
                />
            </mesh>
        </group>
    );
}

export default function FitnessBand3D() {
    const { isDark } = useTheme();

    return (
        <div style={{ width: '100%', height: '100%', cursor: 'grab', position: 'relative', zIndex: 10 }}>
            {/* Glow backdrop behind the model - changed to seamless CSS var */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'radial-gradient(circle at center, var(--glow-color) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: -1 }}></div>

            <Canvas camera={{ position: [0, 0, 7], fov: 40 }} gl={{ alpha: true }}>
                <PresentationControls
                    global
                    config={{ mass: 2, tension: 500 }}
                    snap={{ mass: 4, tension: 1500 }}
                    rotation={[0, 0, 0]}
                    polar={[-Math.PI / 4, Math.PI / 4]}
                    azimuth={[-Math.PI / 2, Math.PI / 2]}
                >
                    <Float speed={1.5} rotationIntensity={0} floatIntensity={0.3}>
                        <MinimalBand isDark={isDark} />
                    </Float>
                </PresentationControls>
            </Canvas>
        </div>
    );
}
