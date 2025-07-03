import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { useCallback } from "react";
import { addColumn } from "@/redux/slice/boardSlice";
import Header from "@/components/TaskBoardHeader/Header";
import DragDropBoard from "@/components/Board/DragDropBoard";
import MobileDragDropBoard from "@/components/Board/MobileDragDropBoard";
/**
 * BoardPage Component
 *
 * Main page component for the Kanban board application.
 * Follows Single Responsibility Principle by focusing solely on:
 * - Page layout and structure
 * - Coordinating between header and board components
 * - Managing column addition logic
 *
 * The drag-and-drop logic has been extracted to separate components
 * to maintain clean separation of concerns.
 *
 * @returns JSX element representing the board page
 */
export default function BoardPage() {
  const dispatch = useDispatch();

  // Handle adding new columns
  const handleAddColumn = useCallback((columnName: string) => {
    const newId = uuidv4();
    dispatch(addColumn({ id: newId, name: columnName }));
  }, [dispatch]);

  // Common CSS classes for AddItem components
  const addItemClassName = "bg-blue-600 dark:bg-slate-700/30 dark:hover:bg-slate-600/40 border border-white/20 dark:border-slate-600/30";

  return (
    <section className="min-h-screen h-screen flex flex-col overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <Header />

      {/* Desktop Layout - Horizontal scrolling */}
      <div className="hidden h-screen sm:block">
        <DragDropBoard
          onAddColumn={handleAddColumn}
          addItemClassName={addItemClassName}
        />
      </div>

      {/* Mobile Layout - Vertical scrolling */}
      <div className="sm:hidden  overflow-y-auto">
        <MobileDragDropBoard
          onAddColumn={handleAddColumn}
          addItemClassName={addItemClassName}
        />
      </div>
    </section>
  );
}