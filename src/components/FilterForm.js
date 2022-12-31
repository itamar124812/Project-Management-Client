import { useState } from 'react';
import { filter } from '../rest';
import { useHistory } from 'react-router-dom';
import {FilteredTasksPage} from './FilteredTasksPage';



const FilterForm = (props) => {
  const board = props.boardId;


  const [field, setField] = useState('');
  const [value, setValue] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    const filterFields = { [field]:value };
    const filteredTasks =filter(board,filterFields).then(result => {
       <FilteredTasksPage filteredTasks={filteredTasks}/>
    window.location = `/board/filtered-tasks`;})}


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="field">Field:</label>
      <input
        type="text"
        id="field"
        name="field"
        value={field}
        onChange={(event) => setField(event.target.value)}
      />
      <label htmlFor="value">Value:</label>
      <input
        type="text"
        id="value"
        name="value"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit">Filter</button>
    </form>
  );
};

export default FilterForm;
