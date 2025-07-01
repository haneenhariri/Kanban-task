import TaskTitle from "../ui/Titles/TaskTitle";
import down from '../../assets/icons/arrow-down.svg'
import up from '../../assets/icons/arrow-up.svg'
import edite from '../../assets/icons/edit.svg'
import deleteIcon from '../../assets/icons/delete.svg'
import { useState } from "react";
import { deleteTask, editeTask } from "../../redux/slice/boardSlice";
import { useDispatch } from "react-redux";

export interface TaskProps{
  title : string;
  description : string;
  id: string; 
  columnId: string;
}

export default function Task({title , description , id , columnId } : TaskProps) {
  const [show , setShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);

  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log("Deleting:", columnId, id);
    dispatch(deleteTask({ columnId, taskId: id }));
  };

  const onToggle = () => {
    setShow(!show);
    setIsEditing(false); // لما تغلق الوصف تأكد ان الفورم مخفي
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if(editTitle.trim() === ""){
      alert("Title cannot be empty");
      return;
    }
    dispatch(editeTask({
      columnId,
      taskId: id,
      updatedTask: { title: editTitle.trim(), description: editDescription.trim() }
    }));
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col gap-2.5 border border-gray-200 shadow-sm rounded-sm p-2 bg-white">
      <div className="w-full">
        <button onClick={onToggle} className="items-center w-full flex justify-between">
          <TaskTitle taskTitle={title} />
          {show ? (
            <img className="w-5 h-5" src={down} alt="arrow-down" />
          ) : (
            <img className="w-5 h-5" src={up} alt="arrow-up" />
          )}
        </button>

        {show && (
          <div className="mt-2">
            {isEditing ? (
              <form onSubmit={handleSave} className="flex flex-col gap-3">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  placeholder="Task Title"
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  placeholder="Task Description"
                  rows={4}
                  className="border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex gap-2 justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <>
                <p className="text-base text-gray-500 whitespace-pre-wrap">{description}</p>
                <div className="flex items-center justify-end gap-2.5 mt-3">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="p-1 hover:bg-gray-100 rounded"
                    aria-label="Edit task"
                  >
                    <img className="w-4 h-4" src={edite} alt="edit" />
                  </button>
                  <button
                    onClick={handleDelete}
                    className="p-1 hover:bg-gray-100 rounded"
                    aria-label="Delete task"
                  >
                    <img className="w-5 h-5" src={deleteIcon} alt="delete" />
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
