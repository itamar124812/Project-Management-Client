import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export const FilteredTasksPage = () => {
  const { state } = useLocation();
  console.log(state.data);
  const filteredTasks=state.data;
  useEffect(()=>{
    console.log(filteredTasks)
  },[filteredTasks])

  return (
    <div>
      <h2>Filtered Tasks</h2>
      <ul>
        {filteredTasks && filteredTasks.map((task) => (
          <li key={task.id}>
            <div className="task">
            <form className="taskForm">
          <h3 className="taskTitle">{task.title}</h3>
          <p className="taskDescription">{task.description}</p>
          <div className="taskDetails">
            { task.dueDate ? <p className="taskStatus">Due date: {task.dueDate}</p>:<></>} 
            <p className="taskStatus">Status: {task.status}</p>
            <p className="taskStatus">Type: {task.type}</p>
            <p className="taskStatus">importance:{task.importance}</p>
          </div>
        </form></div>
        </li>     
        ))}
      </ul>
    </div>
  );
};

