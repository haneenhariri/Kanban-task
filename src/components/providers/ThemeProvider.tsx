import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '@/redux';
import { setTheme } from '@/redux/slice/themeSlice';
import { STORAGE_KEYS } from '@/types/types';

/**
 * ThemeProvider Component
 * 
 * Responsible for managing the application's theme state and applying it to the DOM.
 * This component follows the Single Responsibility Principle by handling only theme-related logic.
 * 
 * Responsibilities:
 * 1. Listen to system theme preference changes
 * 2. Apply theme changes to the document element
 * 3. Persist theme preferences to localStorage
 * 
 * @param props - Component props
 * @param props.children - Child components to render
 * @returns JSX element that wraps children with theme management
 */
export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.theme);

  // Effect to handle system theme changes
  useEffect(() => {
    // Listen for system theme preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      // Only update if no theme is saved in localStorage (user hasn't manually set a preference)
      const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
      if (!savedTheme) {
        dispatch(setTheme(e.matches ? 'dark' : 'light'));
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [dispatch]);

  // Effect to apply theme changes to the DOM and persist to localStorage
  useEffect(() => {
    // Apply theme to document element for Tailwind CSS dark mode
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Persist theme preference to localStorage
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }, [theme]);

  return <>{children}</>;
}
