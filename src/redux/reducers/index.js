import {combineReducers} from "@reduxjs/toolkit";
import todos from "./todos";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistTodo = {
  key: "data", // key untuk local storage
  storage,
};

const reducer = combineReducers({
  todos: persistReducer(persistTodo, todos), //config untuk reducernya
});

export default reducer;

// NOTE:
// ga semua data harus disimpan di local storage
