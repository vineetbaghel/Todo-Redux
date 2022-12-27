import { createSlice } from "@reduxjs/toolkit";

const ToDoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },
  reducers: {
    addToDo: (state, action) => {
      state.todoList.push({ id: action.payload.id, data: action.payload.data });
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload
      );
    },
    deleteAll: (state) => {
      state.todoList = [];
    },
  },
});

export const { addToDo, deleteTodo, deleteAll } = ToDoSlice.actions;
export default ToDoSlice.reducer;
