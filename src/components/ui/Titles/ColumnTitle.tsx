import type { ColumnTitleProps } from "../../../types/types";

export default function ColumnTitle({columnTitle} : ColumnTitleProps) {
  return (
    <h2 className="font-medium text-lg text-gray-800 dark:text-white transition-colors duration-200">{columnTitle}</h2>
  )
}
