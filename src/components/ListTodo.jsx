import {useState} from "react";
import checklist from "../assets/checklist.svg";
import {MdDateRange} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {removeTask, updateStatusTask, editTask} from "../redux/reducers/todos";
import {FaRegEdit} from "react-icons/fa";
import {MdDeleteOutline, MdCancel} from "react-icons/md";
import {LiaSave} from "react-icons/lia";
import {useForm} from "react-hook-form";

function ListTodo() {
  // const [todos, setTodos] = useState([]);
  const todoList = useSelector((state) => state.todos.todoList);

  console.log(todoList);
  return (
    <div className="mt-5">
      <h2>To Do</h2>
      <ul className="flex flex-col gap-2">
        {todoList &&
          todoList.map((todo, index) => (
            <ItemTodo key={index} index={index} todo={todo} />
          ))}
      </ul>
    </div>
  );
}

function ItemTodo({index, todo}) {
  const {register, handleSubmit} = useForm();
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = (id) => {
    dispatch(updateStatusTask(id));
    setChecked(!checked);
  };
  const triggerEdit = () => {
    setIsEditing(!isEditing);
  };
  const handleEdit = (data) => {
    console.log("data after edit:", data);

    dispatch(editTask({id: todo.id, newTask: data.newTask}));

    triggerEdit();
  };
  const handleDelete = (id) => {
    dispatch(removeTask(id));
  };

  if (isEditing) {
    return (
      <form
        onSubmit={handleSubmit((data) => handleEdit(data))}
        className="border relative z-10 bg-white/20 flex justify-center items-center p-3 rounded-lg gap-5 cursor-pointer"
      >
        <input
          type="text"
          {...register("newTask")}
          placeholder={todo.task}
          className="flex-3 focus:outline-none border-b-2"
        />
        <div className="flex gap-1">
          <button
            type="submit"
            className="flex-1 text-lg hover:text-green-500 rounded-xl px-2 py-1 cursor-pointer"
          >
            <LiaSave />
          </button>
          <button
            onClick={() => triggerEdit()}
            type="click"
            className="flex-1 text-lg hover:text-red-500 rounded-xl px-2 py-1 cursor-pointer"
          >
            <MdCancel />
          </button>
        </div>
      </form>
    );
  }

  return (
    <li
      className={`bg-white/20 flex justify-between items-center p-3 rounded-lg gap-5 cursor-pointer ${
        checked && "opacity-50"
      }`}
      key={index}
    >
      {checked ? (
        <span onClick={() => handleClick(todo.id)}>
          <img src={checklist} alt="checklist" />
        </span>
      ) : (
        <div
          className="bg-white p-3 rounded-full"
          onClick={() => handleClick(todo.id)}
        ></div>
      )}
      <p
        className={`tracking-wider ${checked && "line-through text-gray-300"}`}
      >
        {todo.task}
      </p>
      <div className="flex gap-2 group">
        <small className="flex gap-2 group-hover:hidden items-center w-20">
          <MdDateRange /> {new Date().toLocaleDateString("id-ID")}
        </small>
        <div className="group-hover:flex hidden w-20 justify-end gap-2">
          <button
            type="button"
            onClick={() => triggerEdit()}
            className="text-xl cursor-pointer hover:text-blue-500"
          >
            <FaRegEdit />
          </button>
          <button type="button" onClick={() => handleDelete(todo.id)}>
            <MdDeleteOutline className="text-xl cursor-pointer hover:text-red-500" />
          </button>
        </div>
      </div>
    </li>
  );
}

export default ListTodo;
