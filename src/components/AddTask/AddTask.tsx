import { useState } from "react";
import AddNew from "../ui/Button/AddNew";
import Form from "../ui/Form/Form";
interface AddTaskProps {
  onTaskAdded: (TaskName: string) => void;
}
export default function AddTask({onTaskAdded} : AddTaskProps) {
    const [showForm , setShowForm] = useState(false);

    const toggleForm  = () => 
    {
      setShowForm(prev => !prev)
    }
    const handleAddTask = (columnName: string) => {
    onTaskAdded(columnName);
    toggleForm();
  };
  return (
    <div className="p-2.5 rounded-sm h-min  text-white bg-blue-950 shadow-sm">
             {showForm ? (
               <Form 
                 placeholder="Add new Task" 
                 onSubmit={handleAddTask}
                 onClose={toggleForm}
               />
             ) : (
               <AddNew 
                 onClick={toggleForm} 
                 label="Add new task"
               />
             )}
    </div>
  )
}
