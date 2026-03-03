import { Link } from 'react-router-dom';
import { Watch, Smartphone, BrainCircuit, Leaf } from 'lucide-react';

export default function Products() {
    const products = [
        {
            id: "band",
            name: "Fitt-X Band",
            icon: <Watch size={40} color="var(--accent-blue)" />,
            desc: "The pinnacle of wearable engineering.",
            features: ["Nanotech sensors", "Form analysis", "Injury prevention", "Child & elder safety", "Water-resistant 50m", "Futuristic design"],
            color: "var(--accent-blue)"
        },
        {
            id: "app",
            name: "Fitt-X App",
            icon: <Smartphone size={40} color="var(--accent-cyan)" />,
            desc: "Your digital nervous system.",
            features: ["Habit builder", "Discipline engine", "Global challenges", "Unified Dashboard", "AI health insights"],
            color: "var(--accent-cyan)"
        },
        {
            id: "coach",
            name: "Fitt-X Coach (AI)",
            icon: <BrainCircuit size={40} color="var(--accent-purple)" />,
            desc: "Personalized intelligence for human optimization.",
            features: ["Tailored routines", "Personalized fitness guidance", "Daily habit nudges", "Mental wellness tracking", "Recovery protocols"],
            color: "var(--accent-purple)"
        },
        {
            id: "food",
            name: "Fitt-X Food",
            icon: <Leaf size={40} color="var(--accent-green)" />,
            desc: "Engineered fuel for cellular regeneration.",
            features: ["Organic food kits", "Personalized meal plans", "Clean supplements", "DNA-matched macro delivery", "Zero synthetic additives"],
            color: "var(--accent-green)"
        }
    ];

    return (
        <div className="page-container">
            <section className="hero-section text-center" style={{ padding: '6rem 0 2rem' }}>
                <div className="container">
                    <h1 className="section-title animate-fade-up" style={{ fontSize: 'clamp(48px, 6vw, 70px)', fontWeight: '800' }}>The <span style={{ color: 'var(--accent-blue)' }}>Ecosystem</span> Array</h1>
                    <p className="section-subtitle animate-fade-up delay-100" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                        Hardware, software, biology, and intelligence seamlessly integrated.
                    </p>
                </div>
            </section>

            <section style={{ padding: '4rem 0 8rem' }}>
                <div className="container">
                    <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        {products.map((prod, idx) => (
                            <div key={prod.id} className="glass-panel" style={{ padding: '3rem', position: 'relative', overflow: 'hidden', background: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                                <div style={{ position: 'absolute', top: 0, right: 0, padding: '2rem', opacity: 0.1, zIndex: 0 }}>
                                    {prod.icon}
                                </div>
                                <div style={{ position: 'relative', zIndex: 1 }}>
                                    <div style={{ marginBottom: '1.5rem' }}>{prod.icon}</div>
                                    <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem', color: prod.color }}>{prod.name}</h3>
                                    <p style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '2rem' }}>{prod.desc}</p>

                                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
                                        {prod.features.map((feat, fidx) => (
                                            <li key={fidx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: prod.color }}></div>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="btn" style={{
                                        background: 'transparent',
                                        color: prod.color,
                                        border: `1px solid ${prod.color}`,
                                        marginTop: '2.5rem',
                                        width: '100%',
                                        borderRadius: '12px',
                                        textTransform: 'uppercase',
                                        cursor: 'pointer'
                                    }}>
                                        Explore {prod.name}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
