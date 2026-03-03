import { Brain, Focus, Sun, ShieldAlert, HeartPulse, Trophy } from 'lucide-react';

export default function Features() {
    const features = [
        {
            title: "Discipline Engine",
            icon: <Focus size={32} color="var(--accent-blue)" />,
            desc: "Replace fleeting motivation with rigorous system design. AI nudges build unbreakable routines.",
        },
        {
            title: "Workout Form Detection",
            icon: <Brain size={32} color="var(--accent-cyan)" />,
            desc: "Unprecedented rep accuracy. Posture alerts prevent injury before tension becomes trauma.",
        },
        {
            title: "Habit Builder",
            icon: <Sun size={32} color="var(--accent-green)" />,
            desc: "Morning alignments, night reflections. Built with neurodivergent (ADHD) friendly scaffolding.",
        },
        {
            title: "Child Mode",
            icon: <ShieldAlert size={32} color="var(--accent-purple)" />,
            desc: "Real-time biometric alerts. Know they're safe down to their heart rate anomalies.",
        },
        {
            title: "Elder Mode",
            icon: <HeartPulse size={32} color="var(--accent-blue)" />,
            desc: "Dignified safety. Fall detection plus longitudinal emotion and HRV tracking.",
        },
        {
            title: "Community Tribes",
            icon: <Trophy size={32} color="var(--accent-cyan)" />,
            desc: "Challenges, university tribes, and tokenized real-world rewards for physical output.",
        }
    ];

    return (
        <div className="page-container">
            <section className="hero-section text-center" style={{ padding: '6rem 0 4rem' }}>
                <div className="container">
                    <h1 className="section-title animate-fade-up" style={{ fontSize: 'clamp(48px, 6vw, 70px)', fontWeight: '800' }}>Platform <span style={{ color: 'var(--accent-blue)' }}>Features</span></h1>
                    <p className="section-subtitle animate-fade-up delay-100" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                        Built for ultimate human acceleration. Every feature engineered to elevate.
                    </p>
                </div>
            </section>

            <section style={{ padding: '2rem 0 8rem' }}>
                <div className="container">
                    <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {features.map((feat, idx) => (
                            <div key={idx} className="glass-panel" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                                <div style={{ marginBottom: '1.5rem', background: 'var(--glow-color)', padding: '1rem', borderRadius: '12px', display: 'inline-block', width: 'fit-content' }}>
                                    {feat.icon}
                                </div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-primary)' }}>{feat.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', flexGrow: 1, lineHeight: '1.6' }}>{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
