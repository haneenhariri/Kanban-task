import type { TaskTitleProps } from "@/types/types";

/**
 * TaskTitle Component
 *
 * Title component for individual tasks within the Kanban board.
 * Features:
 * - Medium font weight for clear readability
 * - Large text size appropriate for task headers
 * - Dark mode support with smooth color transitions
 * - Semantic H2 element for document structure
 *
 * @param props - TaskTitle component props
 * @param props.taskTitle - The task title text to display
 * @returns JSX element representing the task title
 */
export default function TaskTitle({taskTitle}: TaskTitleProps) {
  return (
    <h2 className="font-medium text-lg text-gray-800 dark:text-white transition-colors duration-200">{taskTitle}</h2>
  )
}
