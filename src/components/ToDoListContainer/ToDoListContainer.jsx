import React, { useState } from 'react'
import { ToDoForm } from './ToDoForm/ToDoForm'
import { ToDoList } from './ToDoList/ToDoList'
import "./ToDoListContainer.scss"

export const ToDoListContainer = () => {

    const [listData, setListData] = useState(JSON.parse(localStorage.getItem("toDoList")));

    return (
        <div className='container'>
            <ToDoForm listData={listData} setListData={setListData} />
            <ToDoList listData={listData} setListData={setListData} />
        </div>
    )
}
