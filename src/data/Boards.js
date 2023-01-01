import { useState, useEffect } from "react";
import { getAllBoards } from "../rest";
import { useNavigate } from "react-router-dom";
let getBoardById;
let getAll;
function SetupBoards() {
    const [boards, setBoards] = useState([]);
    const navigate = useNavigate();
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
        getBoardById=getBoardByIdIMP;
        getAll=getAllIMP;
        return () =>{getBoardById = null;getAll=null;} 
    }, [navigate])
    function getBoardByIdIMP(id) {
        for (const iterator of boards) {
            if (iterator.boardId === id) return iterator;
        }
    }
    function getAllIMP(){
        return boards;
    }


}
function GetAll()
{
    if(getAll){
    return getAll();
    }
}
function GetBoardById(id){
    if(getBoardById){
      return getBoardById(id);
    }
}
export {GetBoardById};