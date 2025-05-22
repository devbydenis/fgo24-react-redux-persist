import { useState } from "react";
import checklist from "../assets/checklist.svg";
import { MdDateRange } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { updateStatusTask } from "../redux/reducers/todoSlice";

function ListTodo() {
  // const [todos, setTodos] = useState([]);
  const todoList = useSelector((state) => state.todoSlice.todoList);

  console.log(todoList);
  return (
    <div className="mt-5">
      <h2>To Do</h2>
      <ul className="flex flex-col gap-2">
        {todoList &&
          todoList.map((todo, index) => 
            <ItemTodo key={index} index={index} todo={todo} />
          )}
      </ul>
    </div>
  );
}

function ItemTodo({index, todo}) {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    console.log("before", id)
    dispatch(updateStatusTask(id))
    setChecked(!checked);
    console.log("after", id)
  };
  return (
    <li
      className={`bg-white/20 flex justify-between items-center p-3 rounded-lg gap-5 cursor-pointer ${checked && "opacity-50"}`}
      key={index}
      onClick={() => handleClick(todo.id)}
    >
      {
      checked 
        ? <img src={checklist} alt="checklist" />
        : <div className="bg-white p-3 rounded-full"></div>
      }
      <p
        className={`tracking-wider ${checked && "line-through text-gray-300"}`}
      >
        {todo.task}
      </p>
      <small className="flex gap-2 items-center"><MdDateRange /> {new Date().toLocaleDateString('id-ID')}</small>
    </li>
  );
}

export default ListTodo;
