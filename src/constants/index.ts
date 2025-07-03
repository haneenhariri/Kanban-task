// Application Constants

// Local Storage Keys
export const STORAGE_KEYS = {
  BOARD: 'Board',
  THEME: 'theme'
} as const;

// Animation Durations (in milliseconds)
export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 200,
  SLOW: 300,
  DEBOUNCE_SAVE: 300
} as const;

// UI Constants
export const UI_CONSTANTS = {
  MIN_COLUMN_HEIGHT: 400,
  MAX_COLUMN_HEIGHT: '80vh',
  COLUMN_WIDTH: 300,
  TASK_MIN_HEIGHT: 100,
  DRAG_DROP_MIN_HEIGHT: 200
} as const;

// Default Values
export const DEFAULTS = {
  EMPTY_TASK_DESCRIPTION: '',
  FORM_VALIDATION: {
    MIN_TITLE_LENGTH: 1,
    MAX_TITLE_LENGTH: 100,
    MAX_DESCRIPTION_LENGTH: 500
  }
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  EMPTY_TITLE: 'Title cannot be empty',
  TITLE_TOO_LONG: 'Title is too long',
  DESCRIPTION_TOO_LONG: 'Description is too long',
  NETWORK_ERROR: 'Network error occurred',
  SAVE_ERROR: 'Failed to save changes'
} as const;

