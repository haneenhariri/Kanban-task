import type { TaskTitleProps } from "../../../types/ui.types";

export default function TaskTitle({taskTitle} : TaskTitleProps) {
  return (
    <h2 className="font-medium text-lg text-gray-800 dark:text-white transition-colors duration-200">{taskTitle}</h2>
  )
}
