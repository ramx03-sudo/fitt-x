import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Technology', path: '/technology' },
        { name: 'Products', path: '/products' },
        { name: 'Features', path: '/features' },
        { name: 'Nutrition', path: '/nutrition' },
        { name: 'Community', path: '/community' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0, left: 0, right: 0,
            zIndex: 100,
            padding: '1.2rem 2rem',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            background: scrolled || menuOpen ? 'var(--nav-bg)' : 'transparent',
            backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
            borderBottom: scrolled || menuOpen ? '1px solid var(--border-color)' : '1px solid transparent',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Link to="/" style={{
                fontFamily: 'inherit',
                fontSize: '1.2rem',
                fontWeight: '700',
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
            }}>
                FITT-X
            </Link>

            {/* DESKTOP NAV */}
            <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-nav">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        style={{
                            fontSize: '12px',
                            color: location.pathname === link.path ? 'var(--text-primary)' : 'var(--text-secondary)',
                            transition: 'color 0.3s ease',
                            fontWeight: '400',
                            letterSpacing: '0.01em',
                            textTransform: 'uppercase'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                        onMouseOut={(e) => e.currentTarget.style.color = location.pathname === link.path ? 'var(--text-primary)' : 'var(--text-secondary)'}
                    >
                        {link.name}
                    </Link>
                ))}
                <ThemeToggle />
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="mobile-nav-toggle" style={{ cursor: 'pointer', zIndex: 110 }}>
                {menuOpen ? (
                    <X size={24} color="var(--text-primary)" onClick={() => setMenuOpen(false)} />
                ) : (
                    <Menu size={24} color="var(--text-primary)" onClick={() => setMenuOpen(true)} />
                )}
            </div>

            {/* MOBILE MENU DROPDOWN */}
            {menuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'var(--bg-primary)',
                    borderBottom: '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '2rem',
                    gap: '1.5rem',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                fontSize: '1.1rem',
                                color: location.pathname === link.path ? 'var(--text-primary)' : 'var(--text-secondary)',
                                fontWeight: location.pathname === link.path ? '600' : '400',
                                textTransform: 'uppercase',
                                letterSpacing: '0.02em',
                                width: '100%',
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Theme</span>
                        <ThemeToggle />
                    </div>
                </div>
            )}

            <style>{`
                .mobile-nav-toggle { display: none !important; }
                @media(max-width: 900px) {
                    .desktop-nav { display: none !important; }
                    .mobile-nav-toggle { display: block !important; }
                }
            `}</style>
        </nav>
    );
}
