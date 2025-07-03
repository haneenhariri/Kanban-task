import { useSelector, useDispatch } from "react-redux";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from '@hello-pangea/dnd';
import { handleDragEnd } from '@/utils/handleDragEnd';
import type { RootState } from "@/redux";
import Column from "@/components/Column/Column";
import AddItem from "@/components/AddItem/AddItem";
import type { Column as ColumnType } from "@/types/types";

/**
 * DragDropBoard Component Props
 */
interface DragDropBoardProps {
  /** Function to handle adding new columns */
  onAddColumn: (columnName: string) => void;
  /** CSS classes for the AddItem component */
  addItemClassName?: string;
}

/**
 * DragDropBoard Component
 * 
 * Responsible for rendering the drag-and-drop board with columns and tasks.
 * Follows Single Responsibility Principle by handling only:
 * - Drag and drop functionality
 * - Board layout rendering
 * - Column and task display
 * 
 * @param props - Component props
 * @param props.onAddColumn - Function to handle adding new columns
 * @param props.addItemClassName - CSS classes for the AddItem component
 * @returns JSX element representing the drag-and-drop board
 */
export default function DragDropBoard({ onAddColumn, addItemClassName }: DragDropBoardProps) {
  const columns = useSelector((state: RootState) => state.boards.columns);
  const dispatch = useDispatch();

  return (
    <DragDropContext
      onDragEnd={(result: DropResult) => handleDragEnd(result, columns, dispatch)}
    >
      <main className="h-full flex-1 overflow-x-auto overflow-y-hidden px-5 sm:px-10 py-5">
        <Droppable droppableId="board" direction="horizontal" type="column">
          {(provided) => (
            <div
              className="flex gap-2.5 min-w-fit h-full"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {columns.map((column: ColumnType, index: number) => (
                <Draggable draggableId={column.id} index={index} key={column.id}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Column column={column} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <div className="w-[300px]">
                <AddItem
                  placeholder="Add new column"
                  label="Add new column"
                  onAdd={onAddColumn}
                  className={addItemClassName}
                />
              </div>
            </div>
          )}
        </Droppable>
      </main>
    </DragDropContext>
  );
}
