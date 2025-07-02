import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "../slice/boardSlice";

const store = configureStore({
    reducer : {
        boards : boardReducer,
    }
})

// Debounced localStorage saving
let saveTimeout: NodeJS.Timeout;
store.subscribe(() => {
  if (saveTimeout) {
    clearTimeout(saveTimeout);
  }

  saveTimeout = setTimeout(() => {
    localStorage.setItem('Board', JSON.stringify(store.getState().boards));
  }, 300); // حفظ بعد 300ms من آخر تغيير
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;