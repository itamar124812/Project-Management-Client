import React from 'react';

export const FilteredTasksPage = (props) => {
  const { filteredTasks } = props;

  return (
    <div>
      <h2>Filtered Tasks</h2>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

