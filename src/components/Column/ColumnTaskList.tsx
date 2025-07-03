import { Draggable, Droppable } from "@hello-pangea/dnd";
import Task from "../Task/Task";
import type { Task as TaskType } from "@/types/types";

/**
 * ColumnTaskList Props
 */
interface Props {
  /** Array of tasks to display in the column */
  tasks: TaskType[];
  /** Unique identifier for the column */
  columnId: string;
}

/**
 * ColumnTaskList Component
 *
 * Renders a droppable list of tasks within a column.
 * Handles drag and drop functionality for tasks with mobile optimization.
 *
 * @param props - Component props
 * @param props.tasks - Array of tasks to display
 * @param props.columnId - Column identifier for drag and drop
 * @returns JSX element representing the task list
 */
export default function ColumnTaskList({ tasks, columnId }: Props) {
  return (
    <Droppable droppableId={columnId} type="task">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`flex flex-col gap-2 flex-1 px-2.5 py-2 overflow-y-auto max-h-[60vh] touch-manipulation ${
            snapshot.isDraggingOver
              ? "bg-blue-50 dark:bg-blue-900/20 border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-md mx-1"
              : "border-2 border-transparent"
          }`}
          style={{
            // Improve touch handling for mobile drag and drop
            touchAction: 'manipulation'
          }}
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
                    // Improve mobile touch handling
                    touchAction: 'manipulation',
                    userSelect: 'none',
                    WebkitUserSelect: 'none'
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
