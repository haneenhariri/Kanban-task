import down from '@/assets/icons/arrow-down.svg'
import up from '@/assets/icons/arrow-up.svg'
import TaskTitle from '../ui/Titles/TaskTitle';
import type { TaskHeaderProps } from '@/types/board.types';

export default function TaskHeader({ title, show, onToggle, dragHandleProps }: TaskHeaderProps) {
  return (
    <div className="w-full flex justify-between items-center" {...dragHandleProps}>
      <button 
        onClick={onToggle} 
        className="flex-1 flex items-center justify-between text-left"
      >
        <TaskTitle taskTitle={title} />
        <img className="w-5 h-5" src={show ? down : up} alt="toggle" />
      </button>
    </div>
  )
}
