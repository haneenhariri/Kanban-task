import type { ColumnTitleProps } from "@/types/types";

/**
 * ColumnTitle Component
 *
 * Title component for Kanban board columns.
 * Features:
 * - Medium font weight for clear hierarchy
 * - Large text size for readability
 * - Dark mode support with smooth transitions
 * - Semantic H2 element for proper document structure
 *
 * @param props - ColumnTitle component props
 * @param props.columnTitle - The column title text to display
 * @returns JSX element representing the column title
 */
export default function ColumnTitle({columnTitle}: ColumnTitleProps) {
  return (
    <h2 className="font-medium text-lg text-gray-800 dark:text-white transition-colors duration-200">{columnTitle}</h2>
  )
}
