import { memo, useState } from "react";
import TaskHeader from "./TaskHeader";
import TaskContent from "./TaskContent";
import type { TaskProps } from "@/types/types";

/**
 * Task Component
 *
 * Represents an individual task card within a Kanban board column.
 * Features:
 * - Expandable/collapsible content with toggle functionality
 * - Drag and drop support for moving between columns
 * - Dark mode support with smooth transitions
 * - Hover effects for better user interaction
 * - Memoized for performance optimization
 *
 * Structure:
 * - TaskHeader: Always visible, contains title and expand/collapse button
 * - TaskContent: Conditionally rendered, contains description and action buttons
 *
 * @param props - Task component props
 * @param props.title - Task title
 * @param props.description - Task description
 * @param props.id - Unique task identifier
 * @param props.columnId - ID of the column containing this task
 * @param props.dragHandleProps - Drag handle props from react-beautiful-dnd
 * @returns JSX element representing a task card
 */
const Task = memo(function Task({
  title,
  description,
  id,
  columnId,
  dragHandleProps
}: TaskProps) {
  // State to control task content visibility (expanded/collapsed)
  const [show, setShow] = useState(false);

  // Toggle function for expanding/collapsing task content
  const onToggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <div
      className="flex z-10 flex-col gap-2 border border-gray-200 dark:border-slate-600 rounded-lg p-3 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md mb-2 cursor-grab active:cursor-grabbing"
      {...dragHandleProps}
    >
      {/* Task header - always visible */}
      <TaskHeader title={title} show={show} onToggle={onToggle} />

      {/* Task content - conditionally rendered based on show state */}
      {show && (
        <TaskContent
          title={title}
          description={description}
          columnId={columnId}
          taskId={id}
        />
      )}
    </div>
  );
});

export default Task;
