import React from 'react'

function EditTodo() {
  return (
    <>
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
            <div className="flex gap-2 group">
              <small className="flex gap-2 group-hover:hidden items-center w-20"><MdDateRange /> {new Date().toLocaleDateString('id-ID')}</small>
              <div className="group-hover:flex hidden w-20 justify-end gap-2">
                <button type="button" onClick={() => handleEdit(todo.id)} className="text-xl cursor-pointer hover:text-blue-500"><FaRegEdit /></button>
                <button type="button" onClick={() => handleDelete(todo.id)}><MdDeleteOutline className="text-xl cursor-pointer hover:text-red-500" /></button>
              </div>
            </div>
          </li>
    </>
  )
}

export default EditTodo