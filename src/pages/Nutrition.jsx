import { Leaf, Award, Activity } from 'lucide-react';

export default function Nutrition() {
    return (
        <div className="page-container">
            <section className="hero-section text-center" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
                <div className="container">
                    <h1 className="section-title animate-fade-up" style={{ fontSize: 'clamp(48px, 6vw, 70px)', fontWeight: '800' }}>Organic <span style={{ color: 'var(--accent-green)' }}>Fuel</span></h1>
                    <p className="section-subtitle animate-fade-up delay-100" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                        Personalized macro-nutrition, derived entirely from whole-food principles and AI-assisted cellular analytics.
                    </p>
                </div>
            </section>

            <section style={{ padding: '4rem 0 8rem' }}>
                <div className="container">
                    <div className="grid-3" style={{ textAlign: 'center', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                        <div className="glass-panel" style={{ padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                                <Leaf size={64} color="var(--accent-green)" />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-primary)' }}>Whole-Food Core</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>No synthetics, no highly processed fillers. Pure biological fuel.</p>
                        </div>

                        <div className="glass-panel" style={{ padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                                <Activity size={64} color="var(--accent-cyan)" />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-primary)' }}>AI Macro Plans</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Diets engineered around your daily burn-rate and metabolic profile.</p>
                        </div>

                        <div className="glass-panel" style={{ padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                                <Award size={64} color="var(--accent-purple)" />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-primary)' }}>Monthly Kits</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Subscribed delivery of curated organic supplements right to your door.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
