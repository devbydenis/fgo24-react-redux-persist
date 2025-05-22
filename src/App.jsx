import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";

function App() {
  
  return (
    <div className="relative bg-indigo-900 text-white h-screen grid place-items-center">
        <div className="absolute z-10 inset-0 bg-black opacity-50"></div>
        <div className="relative z-20 inset-0 min-w-1/2 mx-auto border border-gray-400 rounded-3xl p-5">
          <h1 className="text-3xl text-center font-semibold">React Todo</h1>
          <InputTodo />
          <ListTodo />
        </div>
    </div>
  );
}

export default App;
