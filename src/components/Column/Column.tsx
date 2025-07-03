import { memo } from "react";
import type { ColumnProps } from "@/types/types";
import ColumnHeader from "./ColumnHeader";
import ColumnFooter from "./ColumnFooter";
import ColumnTaskList from "./ColumnTaskList";

const Column = memo(function Column({column} : ColumnProps) {
  return (
    <div className="flex flex-col shadow-sm bg-white/90 dark:bg-slate-800/90 sm:w-[300px] rounded-sm max-h-[80vh]">
      <ColumnHeader column={column} tasks={column.tasks} />
      <ColumnTaskList tasks={column.tasks} columnId={column.id} />
      <ColumnFooter columnId={column.id} />
    </div>
  )
});

export default Column;
