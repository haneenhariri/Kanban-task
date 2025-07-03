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
 * MobileDragDropBoard Component Props
 */
interface MobileDragDropBoardProps {
  /** Function to handle adding new columns */
  onAddColumn: (columnName: string) => void;
  /** CSS classes for the AddItem component */
  addItemClassName?: string;
}

/**
 * MobileDragDropBoard Component
 * 
 * Responsible for rendering the mobile-optimized drag-and-drop board.
 * Follows Single Responsibility Principle by handling only:
 * - Mobile drag and drop functionality (vertical layout)
 * - Mobile board layout rendering
 * - Column and task display for mobile devices
 * 
 * @param props - Component props
 * @param props.onAddColumn - Function to handle adding new columns
 * @param props.addItemClassName - CSS classes for the AddItem component
 * @returns JSX element representing the mobile drag-and-drop board
 */
export default function MobileDragDropBoard({ onAddColumn, addItemClassName }: MobileDragDropBoardProps) {
  const columns = useSelector((state: RootState) => state.boards.columns);
  const dispatch = useDispatch();

  return (
    <DragDropContext
      onDragEnd={(result: DropResult) => handleDragEnd(result, columns, dispatch)}
    >
      <main className="flex-1 min-h-screen overflow-y-auto overflow-x-hidden px-5 py-5">
        <Droppable droppableId="board-mobile" direction="vertical" type="column">
          {(provided) => (
            <div
              className="flex flex-col gap-2.5"
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
              <AddItem
                placeholder="Add new column"
                label="Add new column"
                onAdd={onAddColumn}
                className={addItemClassName}
              />
            </div>
          )}
        </Droppable>
      </main>
    </DragDropContext>
  );
}
