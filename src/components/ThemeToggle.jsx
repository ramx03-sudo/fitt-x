import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Monitor } from 'lucide-react';

export default function ThemeToggle() {
    const { theme, cycleTheme } = useTheme();

    return (
        <button
            onClick={cycleTheme}
            style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                borderRadius: '50%',
                transition: 'all 0.3s ease'
            }}
            title={`Theme: ${theme}`}
        >
            {theme === 'system' && <Monitor size={20} />}
            {theme === 'dark' && <Moon size={20} />}
            {theme === 'light' && <Sun size={20} />}
        </button>
    );
}
