import { Activity, Cpu, ShieldAlert, Navigation2 } from 'lucide-react';

export default function Technology() {
    return (
        <div className="page-container">
            {/* Hero Section */}
            <section className="hero-section text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: 'var(--bg-primary)' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at center, var(--glow-color) 0%, transparent 70%)' }}></div>
                </div>

                <div className="container relative z-10" style={{ paddingTop: '5rem' }}>
                    <h1 className="section-title animate-fade-up" style={{ fontSize: 'clamp(48px, 6vw, 70px)', fontWeight: '800' }}>Nanoscale <span style={{ color: 'var(--accent-cyan)' }}>Architecture</span></h1>
                    <p className="section-subtitle animate-fade-up delay-100" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                        Discover the proprietary sensors, artificial intelligence, and safety protocols driving the Fitt-X ecosystem.
                    </p>
                </div>
            </section>

            {/* Grid Features */}
            <section style={{ background: 'var(--bg-secondary)', padding: '6rem 0' }}>
                <div className="container">
                    <div className="grid-2 mb-8" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div className="glass-panel" style={{ padding: '3rem', background: 'var(--bg-tertiary)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                            <Cpu size={40} color="var(--accent-cyan)" className="mb-4" />
                            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>Nanotechnology Sensors</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
                                <li style={{ display: 'flex', gap: '1rem' }}><div style={{ color: 'var(--accent-cyan)' }}>•</div> Biometric precision at subcellular levels</li>
                                <li style={{ display: 'flex', gap: '1rem' }}><div style={{ color: 'var(--accent-cyan)' }}>•</div> Real-time HRV (Heart Rate Variability) analysis</li>
                                <li style={{ display: 'flex', gap: '1rem' }}><div style={{ color: 'var(--accent-cyan)' }}>•</div> Cortisol and stress detection algorithms</li>
                                <li style={{ display: 'flex', gap: '1rem' }}><div style={{ color: 'var(--accent-cyan)' }}>•</div> Healthspan & biological age prediction mapping</li>
                            </ul>
                        </div>

                        <div className="glass-panel" style={{ padding: '3rem', background: 'var(--bg-tertiary)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                            <Activity size={40} color="var(--accent-blue)" className="mb-4" />
                            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>AI Lifespan Engine</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
                                <li style={{ display: 'flex', gap: '1rem' }}><div style={{ color: 'var(--accent-blue)' }}>•</div> Advanced neural networks predicting aging patterns</li>
                                <li style={{ display: 'flex', gap: '1rem' }}><div style={{ color: 'var(--accent-blue)' }}>•</div> Dynamic performance level baselining vs real output</li>
                                <li style={{ display: 'flex', gap: '1rem' }}><div style={{ color: 'var(--accent-blue)' }}>•</div> Pre-symptomatic lifestyle risk identification</li>
                                <li style={{ display: 'flex', gap: '1rem' }}><div style={{ color: 'var(--accent-blue)' }}>•</div> Hyper-personalized recovery and nutrition needs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Motion & Safety */}
            <section style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                        <div>
                            <Navigation2 size={48} color="var(--accent-green)" className="mb-4" />
                            <h2 className="section-title mb-4" style={{ fontSize: 'clamp(40px, 5vw, 56px)' }}>3D <span style={{ color: 'var(--accent-green)' }}>Motion Analysis</span></h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Six-axis spatial tracking to ensure joint integrity during peak loads.</p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
                                <li><strong>✓ Detects gym form anomalies</strong> in milliseconds</li>
                                <li><strong>✓ Tracks movement angles</strong> with 99.9% accuracy</li>
                                <li><strong>✓ Prevents musculoskeletal injury</strong> by alerting pre-failure</li>
                                <li><strong>✓ Gives real-time corrective feedback</strong> via haptic pulses</li>
                            </ul>
                        </div>

                        <div className="glass-panel" style={{ background: 'var(--bg-tertiary)', padding: '3rem', position: 'relative', overflow: 'hidden', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                            <ShieldAlert size={48} color="var(--accent-purple)" className="mb-4" />
                            <h2 className="section-title mb-4" style={{ fontSize: '2rem' }}>Safety <span style={{ color: 'var(--accent-purple)' }}>Architecture</span></h2>

                            <div style={{ marginBottom: '2rem' }}>
                                <h4 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '700' }}>Child Mode</h4>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                    <div>• Sub-meter location tracking</div>
                                    <div>• Biological stress alerts</div>
                                    <div>• SOS rapid activation</div>
                                    <div>• Device removal notifications</div>
                                </div>
                            </div>

                            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
                                <h4 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '700' }}>Elder Mode</h4>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                    <div>• Automatic fall detection</div>
                                    <div>• Heart irregularity scans</div>
                                    <div>• Emotional pattern deviations</div>
                                    <div>• Satellite emergency escalation</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
