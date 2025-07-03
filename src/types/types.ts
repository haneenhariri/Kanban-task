/**
 * Consolidated Type Definitions & Constants
 *
 * This file contains all TypeScript type definitions and application constants
 * for the Kanban Task Board application. Content is organized into logical sections:
 *
 * 1. Application Constants - Storage keys, durations, UI constants, etc.
 * 2. External Library Types - Types from third-party libraries
 * 3. Core Data Types - Basic data structures (Task, Column)
 * 4. Component Props Types - Props for React components
 * 5. UI Component Types - Types for UI elements and forms
 * 6. Utility Types - Helper types and interfaces
 */

// ===========================
// Application Constants
// ===========================

/**
 * Local Storage Keys
 * Keys used for storing data in browser's localStorage
 */
export const STORAGE_KEYS = {
  /** Key for storing board data (columns and tasks) */
  BOARD: 'Board',
  /** Key for storing user's theme preference */
  THEME: 'theme'
} as const;

/**
 * Animation Durations (in milliseconds)
 * Standard durations for consistent animations throughout the app
 */
export const ANIMATION_DURATION = {
  /** Fast animations (150ms) */
  FAST: 150,
  /** Normal animations (200ms) */
  NORMAL: 200,
  /** Slow animations (300ms) */
  SLOW: 300,
  /** Debounce delay for saving data (300ms) */
  DEBOUNCE_SAVE: 300
} as const;

/**
 * UI Constants
 * Fixed values for UI layout and sizing
 */
export const UI_CONSTANTS = {
  /** Minimum height for columns */
  MIN_COLUMN_HEIGHT: 400,
  /** Maximum height for columns */
  MAX_COLUMN_HEIGHT: '80vh',
  /** Standard width for columns */
  COLUMN_WIDTH: 300,
  /** Minimum height for tasks */
  TASK_MIN_HEIGHT: 100,
  /** Minimum height for drag and drop areas */
  DRAG_DROP_MIN_HEIGHT: 200
} as const;

/**
 * Default Values
 * Default values used throughout the application
 */
export const DEFAULTS = {
  /** Default empty description for tasks */
  EMPTY_TASK_DESCRIPTION: '',
  /** Form validation rules */
  FORM_VALIDATION: {
    /** Minimum length for task titles */
    MIN_TITLE_LENGTH: 1,
    /** Maximum length for task titles */
    MAX_TITLE_LENGTH: 100,
    /** Maximum length for task descriptions */
    MAX_DESCRIPTION_LENGTH: 500
  }
} as const;

/**
 * Error Messages
 * Standard error messages for user feedback
 */
export const ERROR_MESSAGES = {
  /** Error when title is empty */
  EMPTY_TITLE: 'Title cannot be empty',
  /** Error when title exceeds maximum length */
  TITLE_TOO_LONG: 'Title is too long',
  /** Error when description exceeds maximum length */
  DESCRIPTION_TOO_LONG: 'Description is too long',
  /** Generic network error message */
  NETWORK_ERROR: 'Network error occurred',
  /** Error when saving fails */
  SAVE_ERROR: 'Failed to save changes'
} as const;

// ===========================
// External Library Types
// ===========================

import type { DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from "@hello-pangea/dnd";

// ===========================
// Core Data Types
// ===========================

/**
 * Task Interface
 * Represents a single task item in the Kanban board
 */
export interface Task {
  /** Unique identifier for the task */
  id: string;
  /** Task title/name */
  title: string;
  /** Detailed description of the task */
  description: string;
}

/**
 * Column Interface
 * Represents a column in the Kanban board containing multiple tasks
 */
export interface Column {
  /** Unique identifier for the column */
  id: string;
  /** Column name/title */
  name: string;
  /** Array of tasks within this column */
  tasks: Task[];
}

/**
 * Theme Type
 * Represents the available theme options for the application
 */
export type Theme = 'light' | 'dark';

// ===========================
// Component Props Types
// ===========================

/**
 * Task Component Props
 * Props for the main Task component
 */
export interface TaskProps {
  /** Task unique identifier */
  id: string;
  /** Task title */
  title: string;
  /** Task description */
  description: string;
  /** ID of the column containing this task */
  columnId: string;
  /** Drag handle props from react-beautiful-dnd */
  dragHandleProps?: DraggableProvidedDragHandleProps | null;
  /** Draggable props from react-beautiful-dnd */
  draggableProps?: DraggableProvidedDraggableProps;
  /** Ref callback for the draggable element */
  innerRef?: (element: HTMLElement | null) => void;
  /** Inline styles for the draggable element */
  style?: React.CSSProperties;
}

/**
 * Column Component Props
 * Props for the Column component
 */
export interface ColumnProps {
  /** Column data object */
  column: Column;
}

/**
 * Task Header Props
 * Props for the task header component that handles expand/collapse
 * Note: Drag handle props are now applied to the entire task container for better mobile UX
 */
export interface TaskHeaderProps {
  /** Task title to display */
  title: string;
  /** Whether the task content is expanded */
  show: boolean;
  /** Function to toggle task expansion */
  onToggle: () => void;
}

/**
 * Task Content Props
 * Props for the task content component
 */
export interface TaskContentProps {
  /** Task title */
  title: string;
  /** Task description */
  description: string;
  /** Task unique identifier */
  taskId: string;
  /** ID of the column containing this task */
  columnId: string;
}

/**
 * Column Footer Props
 * Props for the column footer component
 */
export interface ColumnFooterProps {
  /** ID of the column */
  columnId: string;
}

/**
 * Edit Form Task Props
 * Props for the task editing form component
 */
export interface EditFormTaskProps {
  /** Current task title */
  title: string;
  /** Current task description */
  description: string;
  /** ID of the column containing the task */
  columnId: string;
  /** Task unique identifier */
  taskId: string;
  /** Function to close the edit form */
  onClose: () => void;
}

// ===========================
// UI Component Types
// ===========================

/**
 * Header Title Props
 * Props for the main header title component
 */
export interface HeadertitleProps {
  /** Title text to display in the header */
  BoardTitle: string;
}

/**
 * Column Title Props
 * Props for the column title component
 */
export interface ColumnTitleProps {
  /** Title text for the column */
  columnTitle: string;
}

/**
 * Task Title Props
 * Props for the task title component
 */
export interface TaskTitleProps {
  /** Title text for the task */
  taskTitle: string;
}

/**
 * Form Props
 * Props for generic form components
 */
export interface FormProps {
  /** Placeholder text for the form input */
  placeholder: string;
  /** Function called when form is submitted with the input value */
  onSubmit: (value: string) => void;
  /** Function called when form is closed/cancelled */
  onClose: () => void;
}

/**
 * Input Props
 * Props for input field components
 */
export interface InputProps {
  /** Current input value */
  value: string;
  /** Function to update the input value */
  setValue: (value: string) => void;
  /** Placeholder text for the input */
  placeholder: string;
}

/**
 * Add New Button Props
 * Props for the "Add New" button component
 */
export interface AddNewButtonProps {
  /** Button label text */
  label: string;
  /** Function called when button is clicked */
  onClick: () => void;
}

/**
 * Add Item Props
 * Props for the add item component (combines button and form)
 */
export interface AddItemProps {
  /** Placeholder text for the input field */
  placeholder: string;
  /** Label text for the add button */
  label: string;
  /** Function called when a new item is added */
  onAdd: (value: string) => void;
  /** Optional CSS classes for styling */
  className?: string;
}

/**
 * Close Button Props
 * Props for close button components
 */
export interface CloseButtonProps {
  /** Function called when close button is clicked */
  onClose: () => void;
  /** Optional icon color class */
  IconColor?: string;
}

// ===========================
// Utility Types
// ===========================

/**
 * Drag End Parameters
 * Parameters passed to the drag end handler
 */
export interface DragEndParams {
  /** Source location of the dragged item */
  source: {
    /** ID of the source droppable area */
    droppableId: string;
    /** Index position in the source */
    index: number;
  };
  /** Destination location of the dragged item */
  destination: {
    /** ID of the destination droppable area */
    droppableId: string;
    /** Index position in the destination */
    index: number;
  };
}
