import { Send } from 'lucide-react';

export default function Contact() {
    return (
        <div className="page-container">
            <section className="hero-section text-center" style={{ minHeight: '40vh', display: 'flex', alignItems: 'center' }}>
                <div className="container">
                    <h1 className="section-title animate-fade-up" style={{ fontSize: 'clamp(48px, 6vw, 70px)', fontWeight: '800' }}>Let's build the <span style={{ background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-cyan))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>future</span> together.</h1>
                </div>
            </section>

            <section style={{ padding: '0 0 8rem' }}>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <div className="glass-panel" style={{ padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Name</label>
                                <input
                                    type="text"
                                    style={{ width: '100%', padding: '1rem', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', borderRadius: '4px', outline: 'none', transition: 'border 0.3s' }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Email</label>
                                <input
                                    type="email"
                                    style={{ width: '100%', padding: '1rem', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', borderRadius: '4px', outline: 'none', transition: 'border 0.3s' }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Company (Optional)</label>
                                <input
                                    type="text"
                                    style={{ width: '100%', padding: '1rem', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', borderRadius: '4px', outline: 'none', transition: 'border 0.3s' }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Message</label>
                                <textarea
                                    rows="5"
                                    style={{ width: '100%', padding: '1rem', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', borderRadius: '4px', outline: 'none', transition: 'border 0.3s', resize: 'vertical' }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                                ></textarea>
                            </div>

                            <button className="btn btn-primary" style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                                <Send size={18} /> Transmit Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
