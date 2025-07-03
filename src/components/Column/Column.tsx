import { memo } from "react";
import type { ColumnProps } from "@/types/types";
import ColumnHeader from "./ColumnHeader";
import ColumnFooter from "./ColumnFooter";
import ColumnTaskList from "./ColumnTaskList";

/**
 * Column Component
 *
 * Main column component for the Kanban board that represents a task category/status.
 * Features:
 * - Responsive design (fixed width on desktop, full width on mobile)
 * - Dark mode support with semi-transparent backgrounds
 * - Memoized for performance optimization
 * - Composed of three main sections: header, task list, and footer
 * - Maximum height constraint with scrollable task list
 *
 * Structure:
 * - ColumnHeader: Displays column name and task count
 * - ColumnTaskList: Scrollable list of tasks with drag-and-drop
 * - ColumnFooter: Contains "Add Task" functionality
 *
 * @param props - Column component props
 * @param props.column - Column data containing id, name, and tasks
 * @returns JSX element representing a Kanban board column
 */
const Column = memo(function Column({column}: ColumnProps) {
  return (
    <div className="flex flex-col shadow-sm bg-white/90 dark:bg-slate-800/90 sm:w-[300px] rounded-sm max-h-[80vh]">
      {/* Column header with title and task count */}
      <ColumnHeader column={column} tasks={column.tasks} />

      {/* Scrollable task list with drag-and-drop functionality */}
      <ColumnTaskList tasks={column.tasks} columnId={column.id} />

      {/* Footer with add task functionality */}
      <ColumnFooter columnId={column.id} />
    </div>
  );
});

export default Column;
