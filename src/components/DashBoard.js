import "../styles/Board.css";
import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import {createBoard,addItem} from "../rest"
import { useState, useEffect } from "react";
import { serverAddress } from "../constants"



export const DashBoard = () => {
        const navigate = useNavigate();
      const [boardName, setBoardName] = useState("");
    function s(e){

     setBoardName(e.target.value)
    }


      async function handleSubmit(e) {
          try{
             e.preventDefault();
            let resJson = await createBoard(boardName);
            if (resJson.ok) {
                console.log(resJson);
                navigate(`/board/${resJson.id}`)
            } else {
                window.alert("could not create new board " + resJson);
            }
        } catch (err) {
            console.log(err);
        }
      }
    
            
     
    


    return (
                <form onSubmit={handleSubmit}>
                  <label>Enter a board name:
                <input 
                 type="text" onChange={(e)=>setBoardName(e.target.value)}/></label>
                <button id="btn-create-board" >create a Board</button></form>
    )
}
    




export default DashBoard;
