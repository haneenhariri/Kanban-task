import type { Column, Task } from "@/types/board.types";
import ColumnTitle from "../ui/Titles/ColumnTitle";

export default function ColumnHeader( {column , tasks} : {column: Column, tasks: Task[] }) {
  return (
    <div className="flex items-center justify-between mb-2 p-2.5 border-b border-gray-100 dark:border-slate-700">
        <ColumnTitle columnTitle={column.name} />
        <span className="text-sm text-gray-500 dark:text-slate-400 font-medium bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded-full transition-colors duration-200">
          {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}
        </span>
    </div>
  )
}
