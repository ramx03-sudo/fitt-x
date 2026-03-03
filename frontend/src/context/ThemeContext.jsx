import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('system'); // 'light', 'dark', 'system'
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Initial load from local storage
        const storedTheme = localStorage.getItem('fittx-theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const applyTheme = (currentTheme) => {
            let activeIsDark = true;
            if (currentTheme === 'system') {
                activeIsDark = mediaQuery.matches;
            } else {
                activeIsDark = currentTheme === 'dark';
            }

            setIsDark(activeIsDark);
            root.setAttribute('data-theme', activeIsDark ? 'dark' : 'light');
        };

        applyTheme(theme);
        localStorage.setItem('fittx-theme', theme);

        // Listener for system preference changes
        const handleChange = () => {
            if (theme === 'system') {
                applyTheme('system');
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [theme]);

    const cycleTheme = () => {
        setTheme(prev => {
            if (prev === 'system') return 'dark';
            if (prev === 'dark') return 'light';
            return 'system';
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, isDark, cycleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
