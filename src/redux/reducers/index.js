import { combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";


const reducer = combineReducers({
  todoSlice,
})

export default reducer