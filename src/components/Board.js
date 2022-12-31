import { useState, useEffect } from "react";
import { Form, useParams,useNavigate } from "react-router-dom";
import { getBoard, createTask,deleteTask } from "../rest"
import { Link } from 'react-router-dom';


import {Task}  from "./Task";
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

  return (
    <div>

      <ul>{tasks && tasks.map(
        (task, index) => <li className="tasks-li" key={index}>
          <div className="task">
            <form className="taskForm">
              <h3 className="taskTitle">{task.title}</h3>
              <p className="taskDescription">{task.description}</p>
              <div className="taskDetails">
                <p className="taskDueDate">Due date: {task.dueDate}</p>
                <p className="taskStatus">Status: {task.status}</p>
                <p className="taskStatus">Type: {task.type}</p>
              </div>
            </form>
             <button onClick={() => deleteTask(task.id)}>Delete</button>

          </div>

        </li>
      )}</ul>
        
            <Link to={{
      pathname: '/task',
      search: `?boardId=${boardId}`
    }}>
      <button onClick={handleClick}>Add new Task</button>
    </Link>
<form id="filter-form">
  <label for="status">Status:</label>
  <select name="status" id="status">
    <option value="all">All</option>
    <option value="in progress">In progress</option>
    <option value="complete">Complete</option>
  </select>
  <button type="submit">Filter</button>
</form>  </div>
  )

}

