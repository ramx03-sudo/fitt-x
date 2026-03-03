import { Target, Eye, Flame } from 'lucide-react';

export default function About() {
    return (
        <div className="page-container">
            <section className="hero-section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
                <div className="container text-center">
                    <h1 className="section-title animate-fade-up" style={{ fontSize: 'clamp(48px, 6vw, 70px)', fontWeight: '800' }}>The <span style={{ background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-cyan))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Movement</span></h1>
                    <p className="section-subtitle animate-fade-up delay-100" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        Fitt-X was built to solve digital addiction, low discipline, unhealthy routines, and rising youth stress. This isn’t a brand — it’s a movement.
                    </p>
                </div>
            </section>

            <section style={{ background: 'var(--bg-secondary)', padding: '6rem 0' }}>
                <div className="container">
                    <div className="grid-2">
                        <div className="glass-panel" style={{ padding: '4rem 3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <div style={{ background: 'var(--glow-color)', padding: '2rem', borderRadius: '50%', marginBottom: '2rem' }}>
                                <Target size={48} color="var(--accent-blue)" />
                            </div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: '700' }}>Our Mission</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                “To build a disciplined, healthier, stronger generation using advanced technology.”
                            </p>
                        </div>

                        <div className="glass-panel" style={{ padding: '4rem 3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <div style={{ background: 'var(--glow-color)', padding: '2rem', borderRadius: '50%', marginBottom: '2rem' }}>
                                <Eye size={48} color="var(--accent-cyan)" />
                            </div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: '700' }}>Our Vision</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                “A world where people live longer, move better, stay safer, and feel stronger — every day.”
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '8rem 0', position: 'relative' }}>
                <div style={{ position: 'absolute', right: 0, top: '20%', width: '500px', height: '500px', background: 'var(--accent-blue)', filter: 'blur(250px)', opacity: 0.1 }}></div>
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                        <div>
                            <h2 className="section-title mb-4" style={{ fontSize: 'clamp(40px, 5vw, 56px)' }}>The Origin <span style={{ color: 'var(--accent-blue)' }}>Story</span></h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                                In an era dominated by doom-scrolling, sedentary lifestyles, and alarming spikes in chronic youth-stress, the human body wasn't failing — the system was.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                                We looked at contemporary tech and realized it was optimized for engagement, not enhancement. It tracked steps, but didn't build discipline. It recorded sleep, but didn't improve recovery.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
                                Fitt-X forces a paradigm shift. We engineer hardware and software that actively redesigns your neurological feedback loops. It rewards strength. It demands discipline. It ensures safety.
                            </p>
                            <button className="btn btn-primary">Join the Revolution</button>
                        </div>

                        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                            <div style={{
                                width: '100%',
                                paddingBottom: '100%',
                                borderRadius: '16px',
                                background: 'var(--bg-tertiary)',
                                position: 'relative',
                                overflow: 'hidden',
                                border: '1px solid var(--border-color)'
                            }}>
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                                    <Flame size={80} color="var(--accent-blue)" style={{ marginBottom: '1rem', opacity: '0.8' }} />
                                    <div style={{ fontWeight: '700', fontSize: '1.5rem', letterSpacing: '0.1em' }}>IGNITE</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
