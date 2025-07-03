import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "../slice/boardSlice";
import { STORAGE_KEYS, ANIMATION_DURATION } from "@/types/types";
import themeReducer from '../slice/themeSlice'
const store = configureStore({
    reducer : {
        boards : boardReducer,
        theme: themeReducer,
    }
})

let saveTimeout: ReturnType<typeof setTimeout>;
store.subscribe(() => {
  if (saveTimeout) {
    clearTimeout(saveTimeout);
  }

  saveTimeout = setTimeout(() => {
    localStorage.setItem(STORAGE_KEYS.BOARD, JSON.stringify(store.getState().boards));
  }, ANIMATION_DURATION.DEBOUNCE_SAVE);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;