export default function Roadmap() {
    const roadmapItems = [
        { phase: "Phase 1", title: "App Release", desc: "Core software platform launch", active: true },
        { phase: "Phase 2", title: "Wearable Prototype", desc: "Hardware alpha testing", active: false },
        { phase: "Phase 3", title: "Nutrition Launch", desc: "Organic meal kits scale", active: false },
        { phase: "Phase 4", title: "Satellite Safety", desc: "Global emergency architecture", active: false },
        { phase: "Phase 5", title: "Global Expansion", desc: "Worldwide ecosystem deployment", active: false }
    ];

    return (
        <div className="page-container">
            <section className="hero-section text-center" style={{ padding: '6rem 0 4rem' }}>
                <div className="container">
                    <h1 className="section-title animate-fade-up" style={{ fontSize: 'clamp(48px, 6vw, 70px)', fontWeight: '800' }}>The <span style={{ color: 'var(--accent-blue)' }}>Roadmap</span></h1>
                    <p className="section-subtitle animate-fade-up delay-100" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                        A disciplined trajectory toward complete ecosystem integration.
                    </p>
                </div>
            </section>

            <section style={{ padding: '4rem 0 8rem', overflowX: 'auto' }}>
                <div className="container" style={{ minWidth: '800px' }}>
                    <div style={{ position: 'relative', paddingTop: '4rem', paddingBottom: '4rem', display: 'flex', justifyContent: 'space-between' }}>
                        {/* Connecting Line */}
                        <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: '4px', background: 'var(--border-color)', transform: 'translateY(-50%)', zIndex: 0 }}></div>
                        <div style={{ position: 'absolute', top: '50%', left: '0', width: '25%', height: '4px', background: 'var(--accent-cyan)', transform: 'translateY(-50%)', zIndex: 1, boxShadow: 'var(--glow-color)' }}></div>

                        {roadmapItems.map((item, idx) => (
                            <div key={idx} style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '180px', textAlign: 'center' }}>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                    {item.phase}
                                </div>

                                <div style={{
                                    width: '24px', height: '24px',
                                    borderRadius: '50%',
                                    background: item.active ? 'var(--accent-blue)' : 'var(--bg-tertiary)',
                                    border: `4px solid ${item.active ? 'var(--accent-cyan)' : 'var(--border-color)'}`,
                                    marginBottom: '1.5rem',
                                    boxShadow: item.active ? '0 0 15px var(--accent-cyan)' : 'none'
                                }}></div>

                                <h4 style={{ fontSize: '1.1rem', color: item.active ? 'var(--text-primary)' : 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: '700' }}>
                                    {item.title}
                                </h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
