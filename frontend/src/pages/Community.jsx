import { Users, GraduationCap, Building2, Globe2 } from 'lucide-react';

export default function Community() {
    return (
        <div className="page-container">
            <section className="hero-section text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: 'var(--bg-primary)' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at center, var(--glow-color) 0%, transparent 70%)' }}></div>
                </div>
                <div className="container relative z-10" style={{ paddingTop: '5rem' }}>
                    <h1 className="section-title animate-fade-up" style={{ fontSize: 'clamp(48px, 6vw, 70px)', fontWeight: '800' }}>The <span style={{ color: 'var(--accent-green)' }}>Tribes</span></h1>
                    <p className="section-subtitle animate-fade-up delay-100" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                        The social fitness movement. We don't just track data — we build legions of disciplined athletes.
                    </p>
                </div>
            </section>

            <section style={{ padding: '4rem 0 8rem' }}>
                <div className="container">
                    <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div className="glass-panel" style={{ padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                            <GraduationCap size={48} color="var(--accent-blue)" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>University Fit Tribes</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Hyper-competitive collegiate leaderboards. Transform your campus culture.</p>
                        </div>

                        <div className="glass-panel" style={{ padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                            <Building2 size={48} color="var(--accent-cyan)" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>Corporate Wellness</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Empower your workforce with resilient physical and mental habits.</p>
                        </div>

                        <div className="glass-panel" style={{ padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                            <Globe2 size={48} color="var(--accent-purple)" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>Global Leaderboards</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Rank yourself against the top 1% from around the globe.</p>
                        </div>

                        <div className="glass-panel" style={{ padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                            <Users size={48} color="var(--accent-green)" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>Real-World Meetups</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Geo-located flash workouts, Spartan races, and local gym takeovers.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
