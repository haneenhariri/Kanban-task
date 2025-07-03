// Main types file - Re-exports for convenience
// This file serves as a central point for importing types

// UI Types
export type {
  HeadertitleProps,
  ColumnTitleProps,
  TaskTitleProps,
  FormProps,
  InputProps,
  AddNewButtonProps,
  AddItemProps
} from './ui.types';

// Board Types
export type {
  ColumnProps,
  TaskProps,
  DragEndParams,
  Task,
  Column
} from './board.types';



export interface ColumnFooterProps {
  columnId: string;
}

export interface TaskContentProps {
  title: string;
  description: string;
  taskId: string;
  columnId: string;
}
