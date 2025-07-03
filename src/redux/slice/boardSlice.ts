import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { STORAGE_KEYS } from "@/types/types";

export interface Task {
  id: string;
  title: string;
  description: string;
}

export interface Column {
  id: string;
  name: string;
  tasks: Task[];
}

export interface BoardState {
  columns: Column[];
}

const loadDataFromLocalStorage = (): BoardState => {
  const saved = localStorage.getItem(STORAGE_KEYS.BOARD);
  return saved ? JSON.parse(saved) : { columns: [] };
};
const initialState : BoardState = loadDataFromLocalStorage();
const boardSlice = createSlice({
    name: 'boards',
    initialState ,
    reducers : 
    {
        addColumn(state, action: PayloadAction<{ id: string; name: string }>) {
            state.columns.push({ id: action.payload.id, name: action.payload.name, tasks: [] });
        },
        addTask(state, action: PayloadAction<{ columnId: string; task: Task }>) {
          const column = state.columns.find(col => col.id === action.payload.columnId);
          if (column) {
            column.tasks.push(action.payload.task);
          }
        },
        deleteTask(state, action: PayloadAction<{ columnId: string; taskId: string }>) {
          const column = state.columns.find(col => col.id === action.payload.columnId);
          if (column) {
            column.tasks = column.tasks.filter(task => task.id !== action.payload.taskId);
          }
        },
        editeTask(state, action: PayloadAction<{columnId: string; taskId:string; updatedTask: Partial<Task>}>){
          const column = state.columns.find(col => col.id === action.payload.columnId);
          if(column) {
            const task = column.tasks.find( t => t.id === action.payload.taskId);
            if(task){
              Object.assign(task ,action.payload.updatedTask)
            }
          }
        },
        reorderColumns: (state, action) => {
          state.columns = action.payload;
        },
        moveTask: (state, action) => {
          const { source, destination } = action.payload;

          const sourceColumn = state.columns.find(col => col.id === source.droppableId);
          const destColumn = state.columns.find(col => col.id === destination.droppableId);

          if (!sourceColumn || !destColumn) return;

          const task = sourceColumn.tasks[source.index];
          if (!task) return;
          sourceColumn.tasks.splice(source.index, 1);
          destColumn.tasks.splice(destination.index, 0, task);
        }
    }
})
export const { moveTask , reorderColumns , addColumn , addTask , deleteTask , editeTask} = boardSlice.actions;

export default boardSlice.reducer