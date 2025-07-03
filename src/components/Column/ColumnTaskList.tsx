import { Draggable, Droppable } from "@hello-pangea/dnd";
import Task from "../Task/Task";
import type { Task as TaskType } from "@/types/types";

interface Props {
  tasks: TaskType[];
  columnId: string;
}

export default function ColumnTaskList({ tasks, columnId }: Props) {
  return (
    <Droppable droppableId={columnId} type="task">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`flex flex-col gap-2 flex-1 px-2.5 py-2 overflow-y-auto max-h-[60vh] ${
            snapshot.isDraggingOver
              ? "bg-blue-50 dark:bg-blue-900/20 border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-md mx-1"
              : "border-2 border-transparent"
          }`}
        >
          {tasks.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id} index={index}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  style={{
                    ...provided.draggableProps.style,
                    opacity: snapshot.isDragging ? 0.7 : 1,
                  }}
                >
                  <Task
                    id={task.id}
                    columnId={columnId}
                    description={task.description}
                    title={task.title}
                    dragHandleProps={provided.dragHandleProps}
                  />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
