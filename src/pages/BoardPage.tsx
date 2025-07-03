import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { useCallback } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from '@hello-pangea/dnd';
import { handleDragEnd } from '@/utils/handleDragEnd';
import type { RootState } from "@/redux/store/store";
import { addColumn } from "@/redux/slice/boardSlice";
import Header from "@/components/TaskBoardHeader/Header";
import Column from "@/components/Column/Column";
import AddItem from "@/components/AddItem/AddItem";
export default function BoardPage() {
  const columns = useSelector((state: RootState) => state.boards.columns);
  const dispatch = useDispatch();

  const handleAddColumn = useCallback((columnName: string) => {
    const newId = uuidv4();
    dispatch(addColumn({ id: newId, name: columnName }));
  }, [dispatch]);

  return (
    <section className="min-h-screen h-screen flex flex-col overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
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
              <div className=" w-[300px]">
              <AddItem
                placeholder="Add new column"
                label="Add new column"
                onAdd={handleAddColumn}
                className=" bg-blue-600  dark:bg-slate-700/30  dark:hover:bg-slate-600/40 border border-white/20 dark:border-slate-600/30"
              />
              </div>

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
               <AddItem
                placeholder="Add new column"
                label="Add new column"
                onAdd={handleAddColumn}
                className=" bg-blue-600  dark:bg-slate-700/30  dark:hover:bg-slate-600/40 border border-white/20 dark:border-slate-600/30"
              />
                         </div>
            )}
          </Droppable>
        </main>
      </DragDropContext>
    </section>
  );
}