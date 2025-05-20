import {useContext, useState} from "react";
import checklist from "../assets/checklist.svg";
import TodoContext from "../context/TodoContext";
import { MdDateRange } from "react-icons/md";


function ListTodo() {
  const {todoList} = useContext(TodoContext);

  return (
    <div className="mt-5">
      <h2>To Do</h2>
      <ul className="flex flex-col gap-2">
        {todoList &&
          todoList.map((todo, index) => <ItemTodo todo={todo} index={index} />)}
      </ul>
    </div>
  );
}

function ItemTodo({index, todo}) {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };
  return (
    <li
      className={`bg-white/20 flex justify-between items-center p-3 rounded-lg gap-5 cursor-pointer ${checked && "opacity-50"}`}
      key={index}
      onClick={() => handleClick()}
    >
      {
      checked 
        ? <img src={checklist} alt="" className="" />
        : <div className="bg-white p-3 rounded-full"></div>
      }
      <p
        className={`tracking-wider ${checked && "line-through text-gray-300"}`}
      >
        {todo.todo}
      </p>
      <small className="flex gap-2 items-center"><MdDateRange /> {new Date().toLocaleDateString('id-ID')}</small>
    </li>
  );
}

export default ListTodo;
