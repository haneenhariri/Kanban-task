import { memo, useState } from "react";
import TaskHeader from "./TaskHeader";
import TaskContent from "./TaskContent";
import type { TaskProps } from "@/types/board.types";

const Task = memo(function Task({
  title,
  description,
  id,
  columnId,
  dragHandleProps
}: TaskProps) {
  const [show, setShow] = useState(false);

  const onToggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <div
      className="flex z-10 flex-col gap-2 border border-gray-200 dark:border-slate-600 rounded-lg p-3 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md mb-2 cursor-grab active:cursor-grabbing"
      {...dragHandleProps}
    >
      <TaskHeader title={title} show={show} onToggle={onToggle} />
      {show && (
        <TaskContent
          title={title}
          description={description}
          columnId={columnId}
          taskId={id}
        />
      )}
    </div>
  );
});

export default Task;
