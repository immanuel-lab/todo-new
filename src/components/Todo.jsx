import React, { useState,useRef } from "react";
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";

import Modal2 from "./Modal2";

function Todo() {
  const [newTask, setNewTask] = useState("");
  const [todo, setTodo] = useState([]);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);

  const openModal = (task) => {
    setIsModalOpen(true);
    setCurrentTaskId(task.id)
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const inputRef = useRef(null);

  const addItem = () => {
    if (newTask) {
      let num = todo.length+1;
      let newEntry = { id: num, title: newTask, completed: false };
      setTodo([...todo, newEntry]);
      setNewTask("");
      inputRef.current.value=""
    }
  };

  const markDoneTask = (task) => {
    // Create a copy of the todo list with the updated completed flag
    const updatedTodo = todo.map((todoItem) => {
      if (todoItem.id === task.id) {
        return { ...todoItem, completed: !todoItem.completed };
      }
      // return todoItem;
    });

    setTodo(updatedTodo);
  };
 

 const handleDelete=(id)=>{
  setTodo(currenttodos=>{return currenttodos.filter(todo=>todo.id!==id)}
    
    )
 }

  return (
    <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-screen w-full fixed">
  
  <h1 className="text-white text-5xl uppercase text-center mb-5 mt-10 animate-bounce ">
        todo
      </h1>
      <div className="flex flex-col items-center mx-auto   w-1/3 rounded-lg mb-3 ">
        <div className="mt-5">
          <input
          
          ref={inputRef}
            type="text"
            placeholder="add item"
            onChange={handleChange}
            className="border border-2 px-3 py-2 rounded-lg border-purple-600 focus:outline-none"
          />
          <br />
          <div className="ml-10 mt-5 md:ml-7">
            <button
              className="bg-blue-500 text-semibold rounded-xl px-5 py-2 uppercase text-white hover:bg-blue-600 hover:text-white focus:outline-none"
              onClick={addItem}
            >
              add item
            </button>
          </div>
        </div>

        {todo.length == 0 && (
          <p className="text-center mt-5 mb-10 text-white">no tasks...</p>
        )}
        {  Todo && (
          <ul >
            {todo.map((todoitem) => {
              return (
                <li key={todoitem.id} className="mt-5 flex flex-col space-y-3 mb-4">
                  <div className="px-10 py-4 bg-gray-300 flex rounded-lg">
                  {/* <div className={`px-10 py-4 bg-gray-300 flex rounded-lg ${todoitem.completed ? 'line-through decoration-red-600' : ''}`}> */}
                  <p className="text-xl">{todoitem.id}. <span className={`ml-5 ${todoitem.completed ? 'line-through decoration-red-600' : ''}`}>
                    {todoitem.title}    </span>  </p>
                    <div className="mt-1 ml-3 text-green-600 hover:cursor-pointer"  onClick={()=>markDoneTask(todoitem)}><MdDone size={23}/></div>
                    <div className="mt-1 ml-3 text-slate-600 hover:cursor-pointer"  onClick={()=>editTask(todoitem)}><FiEdit2 size={18}/></div>
                  <div className="mt-1 ml-3 text-red-600 hover:cursor-pointer" onClick={()=>openModal(todoitem)} > <MdDelete size={20}/> </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )
        }
              {isModalOpen && <Modal2  closeModal={closeModal} handleDelete={handleDelete} id={currentTaskId}/>}

      </div>
    
      </div>
  
  );
}

export default Todo;
