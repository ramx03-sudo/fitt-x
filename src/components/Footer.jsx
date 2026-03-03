import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer style={{
            background: 'var(--bg-primary)',
            padding: '120px 0 40px',
            marginTop: 'auto',
            borderTop: '1px solid var(--border-color)'
        }}>
            <div className="container">

                <div style={{ paddingBottom: '60px', borderBottom: '1px solid var(--border-color)', marginBottom: '40px' }}>
                    <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1', minWidth: '200px' }}>
                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Explore</div>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {['About', 'Technology', 'Products', 'Features', 'Nutrition', 'Community', 'Contact', 'Roadmap'].map((item) => (
                                    <li key={item}><Link to={`/${item.toLowerCase()}`} style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{item}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'var(--text-secondary)',
                    fontSize: '12px'
                }}>
                    <p>&copy; {new Date().getFullYear()} Fitt-X. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
