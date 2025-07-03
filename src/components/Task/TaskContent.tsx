import { useState } from "react";
import { useDispatch } from "react-redux";
import EditFormTask from "../ui/Form/EditFormTask";
import TaskDescription from "../ui/Description/TaskDescription";
import EditeButton from "../ui/Button/EditeButton";
import DeleteButton from "../ui/Button/DeleteButton";
import { deleteTask } from "@/redux/slice/boardSlice";
import type { TaskContentProps } from "@/types/types";


export default function TaskContent({ title, description, taskId, columnId }: TaskContentProps) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask({ columnId, taskId }));
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="mt-2">
      {isEditing ? (
        <EditFormTask
          columnId={columnId}
          taskId={taskId}
          title={title}
          description={description}
          onClose={handleCloseEdit}
        />
      ) : (
        <>
          <TaskDescription description={description} />
          <div className="flex items-center justify-end gap-2.5 mt-2">
            <EditeButton setIsEditing={setIsEditing} />
            <DeleteButton handleDelete={handleDelete} />
          </div>
        </>
      )}
    </div>
  );
}
