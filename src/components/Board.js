import { useState, useEffect } from "react";
import {  useParams,useNavigate } from "react-router-dom";
import { getBoard, createTask,deleteTask } from "../Utilities/rest"
import { Link } from 'react-router-dom';
import FilterForm from './FilterForm';



export const Board = (props) => {

  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [TaskTypes, setTaskTypes] = useState([]);
  const { boardId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function init() {
      let board = await getBoard(boardId);
      console.log(board);
      setTasks(board.tasks);
      setUsers(board.users)
      setStatuses(board.statuses)
      setTaskTypes(board.taskTypes)
    }
    init();
  }, []);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const handleClick  = async(e) => {
 
    }
    const colorMap = {
      red: '#FF0000',
      yellow: '#FFFF00',
      green: '#00FF00',
      azure: '#F0FFFF'
    };

  return (
    <div>

      <ul>{tasks && tasks.map(
        (task, index) => <li className="tasks-li" key={index}>
          <div className="task">
            <form className="taskForm" style={{backgroundColor:colorMap[task.importance]}}>
              <h3 className="taskTitle">{task.title}</h3>
              <p className="taskDescription">{task.description}</p>
              <div className="taskDetails">
                { task.dueDate ? <p className="taskStatus">Due date: {task.dueDate}</p>:<></>} 
                <p className="taskStatus">Status: {task.status}</p>
                <p className="taskStatus">Type: {task.type}</p>
                <p className="taskStatus">importance:{task.importance}</p>
              </div>
            </form>
             <button onClick={() => {deleteTask(boardId,task.id);window.location = `/board/${boardId}`;}}>Delete</button>
          </div>

        </li>
      )}</ul>
        
            <Link to={{
      pathname: '/task',
      search: `?boardId=${boardId}`
    }}>
      <button onClick={handleClick}>Add new Task</button>
    </Link>
              <FilterForm boardId ={boardId}/>

    </div>
  )

}

