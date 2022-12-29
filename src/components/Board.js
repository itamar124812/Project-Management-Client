import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import {getBoard,createTask} from "../rest"

 export const  Board =(props) =>{

const [tasks, setTasks] = useState([]);
const [users, setUsers] =useState([]);
const [statuses ,setStatuses ] = useState([]);
const {boardId} = useParams();


    useEffect(() => {
        async function init() {
        let board = await getBoard(boardId); 
        console.log(board);
        setTasks(board.tasks);
        } 
        init();

       
    }, []);

useEffect(() => {
    console.log(tasks);
    }, [tasks]);

   return (
                <div>
                <h1>Hello</h1>
                <button onClick={() =>createTask()}>add new task</button>
                <button>filter</button>
                </div>
    )
}

