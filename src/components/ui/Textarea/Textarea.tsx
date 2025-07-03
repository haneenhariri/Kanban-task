/**
 * Textarea Props Interface
 * Props for the Textarea component used in task editing
 */
export interface TextareaProps {
  /** Current description text value */
  editDescription: string;
  /** Function to update the description text */
  setEditDescription: (value: string) => void;
}

/**
 * Textarea Component
 *
 * A styled textarea component for editing task descriptions.
 * Features:
 * - Multi-line text input with fixed height (4 rows)
 * - Dark mode support with smooth transitions
 * - Disabled resize to maintain consistent layout
 * - Focus states with ring effects
 * - Consistent styling with other form elements
 *
 * @param props - Textarea component props
 * @param props.editDescription - Current description text
 * @param props.setEditDescription - Function to update description
 * @returns JSX element representing the styled textarea
 */
export default function Textarea({editDescription, setEditDescription}: TextareaProps) {
  return (
    <textarea
      value={editDescription}
      onChange={(e) => setEditDescription(e.target.value)}
      placeholder="Task Description"
      rows={4}
      className="border border-gray-300 dark:border-slate-600 rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-slate-400 transition-all duration-200"
    />
  )
}
