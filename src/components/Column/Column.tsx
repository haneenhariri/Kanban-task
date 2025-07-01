import AddTask from "../AddTask/AddTask";
import Task from "../Task/Task";
import ColumnTitle from "../ui/Titles/ColumnTitle";
import type { ColumnProps } from "../../types/types";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slice/boardSlice";

export default function Column({column} : ColumnProps) {
  const tasks = column.tasks;
  const dispatch = useDispatch();

  const handleAddTask = (taskTitle: string) => {
    const newTask = {
      id: uuidv4(),
      title: taskTitle,
      description: "", 
    };
    dispatch(addTask({ columnId: column.id, task: newTask }));
  };
  return (
    <div className=" flex flex-col h-min shadow-sm gap-2 p-2.5 bg-white/90 sm:w-[300px] rounded-sm ">
      <ColumnTitle columnTitle={column.name}/>
      {tasks.map((task) => ( 
        <Task id={task.id} columnId={column.id} key={task.id} description = {task.description} title={task.title} />) )}
      <AddTask onTaskAdded={handleAddTask}/>
    </div>
  )
}
