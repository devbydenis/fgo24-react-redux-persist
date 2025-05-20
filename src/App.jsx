import React, { useState } from "react";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
import TodoContext from "./context/TodoContext.js";

function App() {
  const TodoProvider = ({children}) => {
    const [todoList, setTodoList] = useState([]);

    function addTodo(data) {
      setTodoList([...todoList, data]);
    }

    return (
      <TodoContext.Provider value={{todoList, addTodo}}>
        {children}
      </TodoContext.Provider>
    );
  };
  return (
    <div className="relative bg-indigo-900 text-white h-screen grid place-items-center">
      <TodoProvider>
        <div className="absolute z-10 inset-0 bg-black opacity-50"></div>
        <div className="relative z-20 inset-0 min-w-1/2 mx-auto border border-gray-400 rounded-3xl p-5">
          <h1 className="text-3xl text-center font-semibold">React Todo</h1>
          <InputTodo />
          <ListTodo />
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;
