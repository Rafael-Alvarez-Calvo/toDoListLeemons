import React, { useState, useEffect } from 'react'
import "./ToDoForm.scss"

export const ToDoForm = ({ listData, setListData }) => {

  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(listData));
  }, [listData])
  

  const handleTaskInput = (event) => {

    event.preventDefault();

    let inputValue = event.target.value;
    setTaskInput([inputValue]);
    
  }

  const handleTask = (event) => {
    
    event.preventDefault();

    setListData((listData !== null && taskInput.length > 0)
      ? [...listData, ...taskInput]
      : taskInput
    );

    setTaskInput("");
  }

  return (
    <form className='form'>
      <input 
        type='text' 
        placeholder='Escribe una tarea...' 
        onChange={(event) => handleTaskInput(event)} 
        value={taskInput}
        maxLength="100"
      />
      <button type='submit' onClick={(event) => handleTask(event)}>Añadir tarea</button>
    </form>
  )
}
