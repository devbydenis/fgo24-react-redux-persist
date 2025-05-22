import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todo",
  initialState: {
    todoList: [
      { id: 1, task: "Belajar React", isDone: false },
      { id: 2, task: "Belajar Redux", isDone: false },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      const id = state.todoList[state.todoList.length - 1].id + 1
      state.todoList.push({id, ...action.payload});
    },
    removeTask: (state, action) => {
      state.todoList = state.todoList.filter((todo) => todo.id !== action.payload);
    },
    // editTask: (state, action) => {
    //   const {id, task} = action.payload
    // }
    updateStatusTask: (state, action) => {
      state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone;
        }
      });
    },
  }
})

export const { addTask, removeTask, updateStatusTask } = todos.actions;
export default todos.reducer