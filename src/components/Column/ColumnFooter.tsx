import { useDispatch } from "react-redux";
import AddItem from "../AddItem/AddItem";
import { useCallback } from "react";
import { v4 as uuidv4 } from 'uuid';
import { addTask } from "@/redux/slice/boardSlice";
import type { ColumnFooterProps } from "@/types/types";

export default function ColumnFooter({columnId}: ColumnFooterProps) {
  const dispatch = useDispatch();
  const handleAddTask = useCallback((taskTitle: string) => {
    const newTask = {
      id: uuidv4(),
      title: taskTitle,
      description: '',
    };
    dispatch(addTask({ columnId: columnId, task: newTask }));
  }, [dispatch, columnId]);
  return (
    <div className="p-2.5">
        <AddItem
          placeholder="Add new task"
          label="Add new task"
          onAdd={handleAddTask}
          className=" bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600"
        />
    </div>
  )
}
