import { useState, useEffect } from "react";
import { Form, useParams } from "react-router-dom";
import { getBoard, createTask } from "../rest"

export const Board = (props) => {

  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [TaskTypes, setTaskTypes] = useState([]);
  const { boardId } = useParams();


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

  return (
    <div>
      <ul>{tasks && tasks.map(
        (task, index) => <li className="message-li" key={index}>
          <div className="task">
            <form className="taskForm">
              <h3 className="taskTitle">{task.title}</h3>
              <p className="taskDescription">{task.description}</p>
              <div className="taskDetails">
                <p className="taskDueDate">Due date: {task.dueDate}</p>
                <p className="taskStatus">Status: {task.status}</p>
              </div>
            </form>
          </div>
        </li>
      )}</ul>
      <button onClick={() => createTask()}>add new task</button>
      <button>filter</button>
    </div>
  )
}

