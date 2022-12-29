import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import {getBoard} from "../rest"

 export const  Board =(props) =>{

const [tasks, setTasks] = useState([]);
const [users, setUsers] =useState([]);
const [statuses ,setStatuses ] = useState([]);
const {boardId} = useParams();


    useEffect(() => {
        async function init() {
        let users = await getBoard(boardId); 
        } 
        init();
       
    }, []);
        console.log(boardId)


}

