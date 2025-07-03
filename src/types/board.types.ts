// Board and Task Related Types

import type { DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from "@hello-pangea/dnd";

export interface Task {
  id: string;
  title: string;
  description: string;
}

export interface Column {
  id: string;
  name: string;
  tasks: Task[];
}
export interface EditFormTaskProps {
    title: string;
    description: string;
    columnId: string;
    taskId: string;
    onClose: () => void;
}
export interface TaskHeaderProps {
  title: string;
  show: boolean;
  onToggle: () => void;
  dragHandleProps?: DraggableProvidedDragHandleProps | null;
}
export interface TaskProps {
  id: string;
  title: string;
  description: string;
  columnId: string;
  dragHandleProps?: DraggableProvidedDragHandleProps | null;
  draggableProps?: DraggableProvidedDraggableProps;
  innerRef?: (element: HTMLElement | null) => void;
  style?: React.CSSProperties;
}

export interface ColumnProps {
  column: Column;
}

export interface DragEndParams {
  source: {
    droppableId: string;
    index: number;
  };
  destination: {
    droppableId: string;
    index: number;
  };

}