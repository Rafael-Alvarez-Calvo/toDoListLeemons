import React from 'react';
import { Task } from '../Task/Task';
import TaskIcon from "../../../assets/svg/task-icon.svg";

import "./ToDoList.scss"

export const ToDoList = ({ listData, setListData }) => {
  
  return (
    <div className='list__container'>
      { listData.length > 0 && 
        <ul>
          <Task listData={listData} setListData={setListData}/>
        </ul>
      }
      
      { listData.length === 0 && 
        <>
          <img src={TaskIcon} alt="icono de tareas" />
          <p>¡Empieza a apuntar tareas para la lista!</p>
        </>
      }
      
    </div>
  )
}
