import Headertitle from "../ui/Titles/Headertitle";
import ThemeToggle from "../ui/ThemeToggle/ThemeToggle";

/**
 * Header Component
 *
 * Main header component for the Kanban task board application.
 * Features:
 * - Application title display
 * - Theme toggle functionality (dark/light mode)
 * - Responsive padding and layout
 * - Dark mode support with smooth transitions
 * - Shadow and border styling for visual separation
 *
 * Layout:
 * - Left side: Application title
 * - Right side: Theme toggle and other controls
 *
 * @returns JSX element representing the application header
 */
export default function Header() {
  return (
    <header className="shadow-sm flex items-center justify-between py-5 sm:px-10 px-5 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 transition-colors duration-200">
      <Headertitle BoardTitle={'Main Board'}/>
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </header>
  )
}
