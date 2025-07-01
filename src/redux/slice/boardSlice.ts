import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
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
  const saved = localStorage.getItem('Board');
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
    }
})
export const { addColumn , addTask } = boardSlice.actions;

export default boardSlice.reducer