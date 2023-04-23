import React, { useState } from 'react'
import { useGlobalContext } from '../context/context';

const AddTask = () => {
  
  const { tasksDispatch } = useGlobalContext();
  const [task, setTask] = useState("");
  
  const handleChange = (e) => {
    setTask(e.target.value);
  }
  
  const handleSubmit = (e) => {
    //if(e.key !== "Enter") return;
    if(task == "") return;
    tasksDispatch({type: "ADD_TASK", payload: task});
    setTask("");
  }
  
  return (
    <>
      <div style={{display: "flex", justifyContent: "center", alignItems: "baseline"}}>
        <input type="text" name="task" id='add-task-box' placeholder="Add New Task" value= {task} onChange={handleChange} />
        <button type='submit' onClick={handleSubmit} style={{border: "none", borderRadius: "10px", width: "auto", height: "40px", marginRight: "10px", backgroundColor: "#7a86fb", color: "#fff", cursor: "pointer"}}>Add Task</button>
      </div>
    </>
  );
};

export default AddTask;