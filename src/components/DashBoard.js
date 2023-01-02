import "../styles/Board.css";
import React, { Component, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createBoard, addItem, getAllBoards } from "../Utilities/rest"
import { useState, useEffect } from "react";
import { getParsedToken } from "../Utilities/useLocalStorage";
import { openConnection } from "../Utilities/sockets";



export const DashBoard = () => {
  const navigate = useNavigate();
  const [boardName, setBoardName] = useState("");
  const [boards, setBoards] = useState([]);
  let userToken=useRef();

  useEffect(() => {
    async function init() {
      const getBoards = await getAllBoards();
      if (getBoards.error) {
        console.log(getBoards.message)
        window.alert("You are not logged in. Please log in.")
        navigate("/login")
      }
      else setBoards(getBoards);
    }
    init()
    userToken.current=getParsedToken()
    openConnection(userToken.current.userId)
  }, [])
  useEffect(() => {
    console.log(boards)

  }, [boards])
  function s(e) {
    setBoardName(e.target.value)
  }

  async function handleSubmit(e) {
    try {
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
    <div className="dashBoardDiv">
      <ul className="boardsList">{boards && boards.map((board) => <li key={board.boardId} className="board">     
          <Link className="boardLink" to={{
            pathname: `/board/${board.boardId}`,
            state:board
          }}>
            <label className="boardNameLabel" htmlFor={board.boardName}>{board.boardName}</label>
          </Link>
      </li>
      )}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>Enter a board name:
          <input className="newBoardNameInput"
            type="text" onChange={(e) => setBoardName(e.target.value)} /></label>
        <button className="addBoardButton" id="btn-create-board" >create a Board</button></form>
    </div>
  )
}





export default DashBoard;
