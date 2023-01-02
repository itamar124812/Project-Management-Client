import React, { useState,useEffect } from "react";
import {createTask, getBoard,deleteTask} from "../Utilities/rest"
import { useLocation } from 'react-router-dom';



 export const  Task = (props) =>{
   const location = useLocation();
  const query = new URLSearchParams(location.search);
  const boardId = query.get('boardId');
    

const [title, setTitle] =  useState('');
const [description, setDescription] = useState('');
const [importance, setImportance] = useState(1);
const [status, setStatus] = useState('');
const [type, setType] = useState('');


    function handleSubmit(e, boardId) {
     e.preventDefault();
    let task = {title: title, description: description, importance: parseInt(importance, 10), type: type, status: status,boardId:boardId};
    createTask(task)
  .then(() => {
    // Navigate to the board page after the task has been created
    window.location = `/board/${boardId}`;
  });
    
}
   return (
                 <div>    
                  <div className="form">
                <form className="create-task-form" onSubmit={(e) => handleSubmit(e, boardId)}>
                <input className="form-inputs" value={title} type="title" placeholder="Type the title`s item" id="title" name="title" onChange={(e) => setTitle(e.target.value)} />
                 {/* <label htmlFor="email">title</label> */}
                <input className="form-inputs" value={description} type="description" placeholder="Type the description`s item" id="description" name="description" onChange={(e) => setDescription(e.target.value)} />
                <input className="form-inputs" value={status} type="status" placeholder="Type the status`s item" id="status" name="status" onChange={(e) => setStatus(e.target.value)} />
                <input className="form-inputs" value={type} type="type" placeholder="Type the type`s item" id="type" name="type" onChange={(e) => setType(e.target.value)} />
                <input className="form-inputs" value={importance} type="importance" placeholder="how importance it that 1-5" id="importance" name="importance" onChange={(e) => setImportance(e.target.value)} />
                <button className="register-btn" type="submit">add new task</button></form>
                  </div>
</div>
    )
 }



       