// UI Component Types

export interface HeadertitleProps {
  BoardTitle: string;
}

export interface ColumnTitleProps {
  columnTitle: string;
}

export interface TaskTitleProps {
  taskTitle: string;
}

export interface FormProps {
  placeholder: string;
  onSubmit: (value: string) => void;
  onClose: () => void;
}

export interface InputProps {
  value: string;
  setValue: (value: string) => void;
  placeholder : string;
}

export interface AddNewButtonProps {
  label: string;
  onClick: () => void;
}

export interface AddItemProps {
  placeholder: string;
  label: string;
  onAdd: (value: string) => void;
  className?: string;
}
export interface CloseButtonProps {
  onClose: () => void;
  IconColor?: string;
}