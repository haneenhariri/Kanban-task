import down from '@/assets/icons/arrow-down.svg'
import up from '@/assets/icons/arrow-up.svg'
import TaskTitle from '../ui/Titles/TaskTitle';
import type { TaskHeaderProps } from '@/types/types';

/**
 * TaskHeader Component
 *
 * Header section of a task card containing the title and expand/collapse toggle.
 * The drag handle props are now applied to the entire task container for better mobile UX.
 *
 * @param props - TaskHeader component props
 * @param props.title - Task title to display
 * @param props.show - Whether the task content is expanded
 * @param props.onToggle - Function to toggle task expansion
 * @returns JSX element representing the task header
 */
export default function TaskHeader({ title, show, onToggle }: TaskHeaderProps) {
  // Handle click with event stopping to prevent drag interference
  const handleToggleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggle();
  };

  return (
    <div className="w-full flex justify-between items-center">
      {/* Task title - clickable area for dragging */}
      <div className="flex-1 cursor-grab active:cursor-grabbing">
        <TaskTitle taskTitle={title} />
      </div>

      {/* Toggle button - separate from drag area */}
      <button
        onClick={handleToggleClick}
        onTouchStart={(e) => e.stopPropagation()} // Prevent touch interference on mobile
        className="p-2 -m-1 rounded hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors flex-shrink-0"
      >
        <img className="w-5 h-5" src={show ? down : up} alt="toggle" />
      </button>
    </div>
  )
}
