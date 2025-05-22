import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todo",
  initialState: {
    todoList: [
      { id: 1, todo: "Belajar React", isDone: false },
      { id: 2, todo: "Belajar Redux", isDone: false },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    
  }
})

export const { addTodo } = todos.actions;
export default todos.reducer