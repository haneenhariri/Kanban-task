import AddTask from "../AddTask/AddTask";
import Task from "../Task/Task";
import ColumnTitle from "../ui/Titles/ColumnTitle";

export default function Column() {
  return (
    <div className=" flex flex-col shadow-sm gap-2 p-2.5 bg-white/90 sm:w-[300px] rounded-sm ">
      <ColumnTitle columnTitle="To Do"/>
      <Task/>
      <Task/>
      <Task/>
      <AddTask/>
    </div>
  )
}
