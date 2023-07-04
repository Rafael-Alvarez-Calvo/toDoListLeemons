import React, { useEffect, useState } from 'react'
import EditIcon from "../../../assets/svg/edit-icon.svg";
import DeleteIcon from "../../../assets/svg/delete-icon.svg";
import AcceptIcon from "../../../assets/svg/accept.svg";

import "./Task.scss";

export const Task = ({ listData, setListData }) => {

    const [editing, setEditing] = useState({
        isEditing: false,
        taskIndex: null,
        Icon: EditIcon
    });
    
    const { isEditing, taskIndex, Icon } = editing;
    
    const [taskInputValue, setTaskInputValue] = useState("");

    const handleEditTask = (event) => {
      
        event.preventDefault();

        const taskIndex = event.currentTarget.parentElement.id.split("-")[1];
        const taskLabelValue = event.currentTarget.previousSibling.outerText;

        setTaskInputValue(taskLabelValue);

        if(isEditing){
            setEditing({
                isEditing: false,
                taskIndex: parseInt(taskIndex),
                Icon: EditIcon
            });

            listData[taskIndex] = taskInputValue;
            setListData([...listData]);
        }
        else{
            setEditing({
                isEditing: true,
                taskIndex: parseInt(taskIndex),
                Icon: AcceptIcon
            });
        }
    }
    
    const handleDeleteTask = (event) => {
      
        event.preventDefault();
        const taskIndex = event.currentTarget.parentElement.id.split("-")[1];
  
        listData.splice(taskIndex, 1);
        setListData([...listData]);
    }

    return(
        <>
            {listData.map((task, index) => {
                return(
                    <li key={index} id={`task-${index}`} className='task'>
                        <input
                            className={(isEditing && taskIndex === index) || "hidden"}
                            type='text' 
                            value={taskInputValue}
                            onChange={(event) => setTaskInputValue(event.target.value)}
                            maxLength="100"
                        />
                        <label className={(isEditing && taskIndex === index) && "hidden"}>{task}</label>

                        <button className='task__edit' onClick={(event) => handleEditTask(event)}>
                            <img src={taskIndex === index ? Icon : EditIcon} alt="icono de editar" />
                        </button>
                        <button className='task__delete' onClick={(event) => handleDeleteTask(event)}>
                            <img src={DeleteIcon} alt="icono de editar" />
                        </button>
                    </li>
                )})
            }
        </>
    )
}
