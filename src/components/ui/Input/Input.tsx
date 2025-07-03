import type { InputProps } from "@/types/types";

/**
 * Input Component
 *
 * A reusable input field component with dark mode support and consistent styling.
 * Features:
 * - Controlled input with value and setValue props
 * - Dark mode styling with smooth transitions
 * - Focus states with ring effects
 * - Responsive design
 *
 * @param props - Input component props
 * @param props.placeholder - Placeholder text for the input
 * @param props.value - Current input value
 * @param props.setValue - Function to update the input value
 * @returns JSX element representing the styled input field
 */
export default function Input({placeholder, value, setValue}: InputProps) {
  return (
    <input
      type='text'
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="border dark:text-white dark:border-slate-600/50 w-full bg-white/10 dark:bg-slate-700/30 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 dark:placeholder:text-slate-300 transition-all duration-200"
      placeholder={placeholder}
    />
  )
}
