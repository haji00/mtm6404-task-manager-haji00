import React, { useState } from 'react';
import { useGlobalContext } from '../context/context';
import { Link } from 'react-router-dom';

const AddDuty = (task_id) => {
  
  const { tasksDispatch, setIsComp, isComp } = useGlobalContext();
  const [duty, setDuty] = useState("");
  const [priority, setPriority] = useState("High");
  
  const handleChange = (e) => {
    setDuty(e.target.value);
  }

  const handleSelectChange = (e) => {
    setPriority(e.target.value);
  }

  const handleCheckChange = (e) => {
    setIsComp(!isComp);
  }
  
  const handleSubmit = (e) => {
    if(duty == "")
    { 
        return;
    }

    tasksDispatch({type: "ADD_DUTY", payload: [task_id, duty, priority]});
    setDuty("");
    setPriority("High");
  }
  
  return (
    <>
      <div className='add-duty'>
        <input type="text" name="duty" id='add-duty-box' placeholder="Add New Duty" value= {duty} onChange={handleChange} />
        <select className='priority-class' value={priority} onChange={handleSelectChange} onSelect={handleSelectChange}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <button type='submit' onClick={handleSubmit} style={{display: "block", width: "60%", border: "none", padding: "10px", margin: "auto", borderRadius: "10px", color: "#fff", backgroundColor: "#7a86fb", cursor: "pointer"}}>Add Duty</button>
      <p style={{textAlign: "center"}}>
        <input type="checkbox" name="text1" onChange={handleCheckChange} checked={isComp}/> <span onClick={handleCheckChange} style={{cursor: "pointer"}}>Hide Completed</span>
      </p>
    </>
  )
}

export default AddDuty;