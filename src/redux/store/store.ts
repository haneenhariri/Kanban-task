import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "../slice/boardSlice";

const store = configureStore({
    reducer : {
        boards : boardReducer,

    }
})
store.subscribe(() => {
  localStorage.setItem('Board', JSON.stringify(store.getState().boards));
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;