import type { RootState } from '@/redux';
import { toggleTheme } from '@/redux/slice/themeSlice';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

/**
 * ThemeToggle Component
 *
 * An interactive toggle button for switching between light and dark themes.
 * Features:
 * - Animated toggle switch with smooth transitions
 * - Visual indicators (sun/moon icons) for current theme
 * - Gradient backgrounds that change based on theme
 * - Accessible with proper aria-label
 * - Memoized for performance optimization
 * - Connected to Redux store for theme state management
 *
 * The component displays:
 * - Light mode: Yellow/orange gradient with sun icon
 * - Dark mode: Blue/purple gradient with moon icon
 *
 * @returns JSX element representing the theme toggle button
 */
const ThemeToggle = memo(function ThemeToggle() {
  // Get current theme from Redux store
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  // Handle theme toggle action
  const handleToggle = () => dispatch(toggleTheme());
  return (
    <button
      onClick={handleToggle}
      className="relative inline-flex h-8 w-14 items-center justify-center rounded-full bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-700 dark:focus:ring-offset-gray-900"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Toggle Background Gradients */}
      {/* Dark mode gradient - visible only in dark mode */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 transition-opacity duration-200 dark:opacity-100" />
      {/* Light mode gradient - visible only in light mode */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-100 transition-opacity duration-200 dark:opacity-0" />

      {/* Toggle Circle - moves left/right based on theme */}
      <div
        className={`absolute h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-200 ${
          theme === 'dark' ? 'translate-x-3' : '-translate-x-3'
        }`}
      >
        {/* Sun Icon - visible in light mode */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
            theme === 'light' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <svg
            className="h-4 w-4 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Moon Icon - visible in dark mode */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
            theme === 'dark' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <svg
            className="h-4 w-4 text-purple-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
      </div>
    </button>
  );
});

export default ThemeToggle;
