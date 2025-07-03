import add from '../../../assets/icons/+.svg'
import type { AddNewButtonProps } from '@/types/types';

/**
 * AddNew Button Component
 *
 * A styled button component for adding new items (tasks, columns, etc.).
 * Features:
 * - Icon + text layout with consistent spacing
 * - Hover effects with opacity changes
 * - Dark mode support
 * - Full width design for container layouts
 * - Smooth transitions for better UX
 *
 * @param props - AddNew button props
 * @param props.label - Text label to display on the button
 * @param props.onClick - Function called when button is clicked
 * @returns JSX element representing the add new button
 */
export default function AddNew({label, onClick}: AddNewButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex gap-2 items-center p-2 rounded-md hover:bg-white/10 dark:hover:bg-slate-600/30 transition-colors duration-200 text-white/90 dark:text-slate-200"
    >
      <img src={add} alt="add" className="w-4 h-4 opacity-80" />
      <p className="font-medium">{label}</p>
    </button>
  )
}
