import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addTask} from "../redux/reducers/todos";

function InputTodo() {
  const {register, handleSubmit} = useForm();
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={handleSubmit((data) =>
        dispatch(addTask({...data, isDone: false}))
      )}
    >
      <div className="flex justify-between mt-5 p-3 bg-indigo-900 rounded-full">
        <input
          className="px-4 py-2 rounded-full w-full outline-none"
          {...register("task")}
          type="text"
          placeholder="Add Item"
        />
        <button
          type="submit"
          className="bg-indigo-500 px-3.5 py-1 cursor-pointer rounded-full font-bold text-2xl"
        >
          +
        </button>
      </div>
    </form>
  );
}

export default InputTodo;
