import React, { useState,useEffect } from "react";
import {createTask, getBoard} from "../rest"


 export const  Task =() =>{
const [title, setTitle] =  useState('');
const [description, setDescription] = useState('');
const [importance, setImportance] = useState(0);
const [boardId, setBoardId] = useState(1);

    const handleSubmit  = async(e) => {
    e.preventDefault();
    createTask(e)
    }


   return (
                <div>
                <form className="create-task-form" onSubmit={handleSubmit}>
                <input className="form-inputs" value={title} type="title" placeholder="Type the title`s item" id="title" name="title" onChange={(e) => setTitle(e.target.value)} />
                 {/* <label htmlFor="email">title</label> */}
                <input className="form-inputs" value={description} type="description" placeholder="Type the description`s item" id="description" name="description" onChange={(e) => setDescription(e.target.value)} />
                <input className="form-inputs" value={importance} type="importance" placeholder="how importance it that 1-5" id="importance" name="importance" onChange={(e) => setImportance(e.target.value)} />
                <button className="register-btn" type="submit">add new task</button></form>
                </div>
    )
 }



       