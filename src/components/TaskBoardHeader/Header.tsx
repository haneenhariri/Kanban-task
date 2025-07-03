import Headertitle from "../ui/Titles/Headertitle";
import ThemeToggle from "../ui/ThemeToggle/ThemeToggle";

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
