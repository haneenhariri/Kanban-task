import AddTask from "../AddTask/AddTask";
import Task from "../Task/Task";
import ColumnTitle from "../ui/Titles/ColumnTitle";
import type { ColumnProps } from "../../types/types";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slice/boardSlice";
import { memo, useCallback } from "react";
import {
  Droppable,
  Draggable,
} from '@hello-pangea/dnd';

const Column = memo(function Column({column} : ColumnProps) {
  const tasks = column.tasks;
  const dispatch = useDispatch();

  const handleAddTask = useCallback((taskTitle: string) => {
    const newTask = {
      id: uuidv4(),
      title: taskTitle,
      description: "",
    };
    dispatch(addTask({ columnId: column.id, task: newTask }));
  }, [dispatch, column.id]);

  return (
    <div className="flex flex-col shadow-sm bg-white/90 sm:w-[300px] rounded-sm max-h-[80vh]">
      <div className="flex items-center justify-between mb-2 p-2.5 pb-0">
        <ColumnTitle columnTitle={column.name} />
        <span className="text-sm text-gray-500 font-medium">{tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}</span>
      </div>
      {/* منطقة إسقاط المهام */}
      <Droppable droppableId={column.id} type="task">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`flex flex-col gap-2 flex-1  px-2.5 transition-colors duration-150 ${
              snapshot.isDraggingOver
                ? 'bg-blue-50 border-2 border-dashed border-blue-300 rounded-md mx-1'
                : 'border-2 border-transparent'
            }`}
          >
            {tasks.map((task, index) => (
              <Draggable draggableId={task.id} index={index} key={task.id}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`transition-shadow duration-150 ${
                      snapshot.isDragging
                        ? 'shadow-lg z-50'
                        : 'hover:shadow-md'
                    }`}
                    style={provided.draggableProps.style}
                  >
                    <Task
                      id={task.id}
                      columnId={column.id}
                      description={task.description}
                      title={task.title}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <div className="p-2.5 ">
        <AddTask onTaskAdded={handleAddTask}/>
      </div>
    </div>
  )
});

export default Column;
