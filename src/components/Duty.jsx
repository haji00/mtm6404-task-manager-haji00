import React from 'react';
import { useGlobalContext } from '../context/context';

const Duty = ({ duty }) => {
  
  const {tasksDispatch} = useGlobalContext();
  
  const handleDelete = () => {
    tasksDispatch({ type: "DELETE_DUTY", payload: {id: duty.id} });
  };
  
  const toggleDutyStatus = () => {
    tasksDispatch({ type: "TOGGLE_DUTY_STATUS", payload: { id: duty.id } });
  };
  
  return (
    <li style={{ display: "flex", alignItems: "center", borderLeft: (duty.isCompleted ? "3px solid green" : "3px solid red") }}>
      <p style={{width: "73%", display: "flex"}}>
          <span style={{flex: 1, textDecoration: (duty.isCompleted ? "line-through" : "none" )}}>
            {duty.text}
          </span>
          <span style={{flex: 1, textAlign: "end", paddingRight: "20px", display: "flex", justifyContent: "end", alignItems: "center"}}>
            {duty.priority}
          </span>
      </p>
      <span>
        <button className="task-btn mark-comp-btn" onClick={toggleDutyStatus} style={{background: (duty.isCompleted ? "green" : "none"), border: "1px solid green"}}>Done</button>
        <button className="task-btn delete-btn" onClick={handleDelete} style={{border: "1px solid red"}}>Delete</button>
      </span>
    </li>
  );
}

export default Duty;