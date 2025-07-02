import AddColumn from "../components/AddColumn/AddColumn";
import Column from "../components/Column/Column";
import Header from "../components/TaskBoardHeader/Header";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store/store";
import { useDispatch } from "react-redux";
import { addColumn } from "../redux/slice/boardSlice";
import { v4 as uuidv4 } from 'uuid';
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from '@hello-pangea/dnd';

import { handleDragEnd } from '../utils/handleDragEnd';
export default function BoardPage() {
  const columns = useSelector((state: RootState) => state.boards.columns);
  const dispatch = useDispatch();

  const handleAddColumn = (columnName: string) => {
    const newId = uuidv4();  // توليد id جديد
    dispatch(addColumn({ id: newId, name: columnName }));
  };



  return (
    <section className="bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 min-h-screen h-screen flex flex-col overflow-hidden">
      <Header />
      
      {/* للشاشات الكبيرة - تمرير أفقي */}
<DragDropContext
  onDragEnd={(result: DropResult) => handleDragEnd(result, columns, dispatch)}
>
  <main className="hidden sm:block flex-1 overflow-x-auto overflow-y-hidden px-5 sm:px-10 py-5">
    <Droppable droppableId="board" direction="horizontal" type="column">
      {(provided) => (
        <div
          className="flex gap-2.5 min-w-fit h-full"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {columns.map((column, index) => (
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
          <AddColumn onColumnAdded={handleAddColumn} />
        </div>
      )}
    </Droppable>
  </main>
</DragDropContext>

      
      {/* للشاشات الصغيرة - تمرير عمودي */}
      <DragDropContext
        onDragEnd={(result: DropResult) => handleDragEnd(result, columns, dispatch)}
      >
        <main className="sm:hidden flex-1 overflow-y-auto overflow-x-hidden px-5 py-5">
          <Droppable droppableId="board-mobile" direction="vertical" type="column">
            {(provided) => (
              <div
                className="flex flex-col gap-2.5"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {columns.map((column, index) => (
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
                <AddColumn onColumnAdded={handleAddColumn} />
              </div>
            )}
          </Droppable>
        </main>
      </DragDropContext>
    </section>
  );
}