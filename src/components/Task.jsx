import React from 'react';
import { useGlobalContext } from '../context/context';
import { Link } from 'react-router-dom';

const Task = ({ task }) => {
  
  const {tasksDispatch} = useGlobalContext();
  
  const handleDelete = () => {
    tasksDispatch({ type: "DELETE_TASK", payload: {id: task.id} });
  }

  
  
  return (
    <li style={{ display: "flex", alignItems: "center", borderLeft: "3px solid green" }}>
      <Link to={"/duties/" + task.id}>
      <span style={{flex: 1}}>
        {task.text}
      </span>
      </Link>
      <span style={{flex: 1, textAlign: "right"}}>
        <button className="task-btn delete-btn" onClick={handleDelete} style={{border: "1px solid red"}}>Delete</button>
      </span>
    </li>
  );
};

export default Task;