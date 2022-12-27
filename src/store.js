import { configureStore } from "@reduxjs/toolkit";
import ToDoSlice from "./reducer/ToDoSlice";

const store = configureStore({
  reducer: { todo: ToDoSlice },
});

export default store;

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
