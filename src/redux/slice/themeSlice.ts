import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { STORAGE_KEYS } from '@/types/types';

/**
 * Theme type definition
 * Represents the available theme options for the application
 */
type Theme = 'light' | 'dark';

/**
 * Get Initial Theme Function
 *
 * Determines the initial theme for the application based on the following priority:
 * 1. Previously saved theme from localStorage (user preference)
 * 2. System/browser theme preference (prefers-color-scheme)
 * 3. Default to 'light' theme as fallback
 *
 * @returns {Theme} The initial theme to be used
 */
const getInitialTheme = (): Theme => {
  // Return light theme for server-side rendering compatibility
  if (typeof window === 'undefined') return 'light';

  // Check for previously saved user preference
  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) as Theme;
  if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
    return savedTheme;
  }

  // Fall back to system preference if no saved theme
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

// Initialize the theme state
const initialState: Theme = getInitialTheme();

/**
 * Theme Slice
 *
 * Redux slice for managing the application's theme state.
 * Provides actions for setting and toggling between light and dark themes.
 * The theme state is used throughout the application to apply appropriate styling.
 */
export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    /**
     * Set Theme Action
     * Directly sets the theme to the specified value
     * Note: state parameter is unused due to Immer's immutable update pattern
     */
    setTheme: (_state, action: PayloadAction<Theme>) => {
      return action.payload;
    },

    /**
     * Toggle Theme Action
     * Switches between light and dark themes
     */
    toggleTheme: (state) => {
      return state === 'light' ? 'dark' : 'light';
    },
  },
});

// Export action creators
export const { setTheme, toggleTheme } = themeSlice.actions;

// Export reducer as default
export default themeSlice.reducer;