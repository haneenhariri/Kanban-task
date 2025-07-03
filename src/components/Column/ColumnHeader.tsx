import type { Column, Task } from "@/types/types";
import ColumnTitle from "../ui/Titles/ColumnTitle";

/**
 * ColumnHeader Props Interface
 */
interface ColumnHeaderProps {
  /** Column data object */
  column: Column;
  /** Array of tasks in the column */
  tasks: Task[];
}

/**
 * ColumnHeader Component
 *
 * Header section of a Kanban board column displaying the column name and task count.
 * Features:
 * - Column title display
 * - Dynamic task counter with proper pluralization
 * - Dark mode support with smooth transitions
 * - Styled task count badge
 * - Bottom border for visual separation
 *
 * @param props - ColumnHeader component props
 * @param props.column - Column data containing name and other properties
 * @param props.tasks - Array of tasks to count and display
 * @returns JSX element representing the column header
 */
export default function ColumnHeader({column, tasks}: ColumnHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-2 p-2.5 border-b border-gray-100 dark:border-slate-700">
      {/* Column title */}
      <ColumnTitle columnTitle={column.name} />

      {/* Task count badge with proper pluralization */}
      <span className="text-sm text-gray-500 dark:text-slate-400 font-medium bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded-full transition-colors duration-200">
        {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}
      </span>
    </div>
  );
}
