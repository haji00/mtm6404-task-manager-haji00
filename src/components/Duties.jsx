import React from 'react';
import Duty from "./Duty";
import { useGlobalContext } from '../context/context';


const Duties = (taskId) => {
  
  const {tasksState, query, isComp} = useGlobalContext();

  let isDuty = false;

  let target_duties = null;

  if(localStorage.getItem("task"))
  {
    tasksState.tasks = JSON.parse(localStorage.getItem("task"));

    for(let i = 0; i < tasksState.tasks.length; i++)
    {
        if(tasksState.tasks[i].id == taskId.taskId)
        {
            target_duties = tasksState.tasks[i].duties;
            isDuty        = true;
        }
    }

    if(target_duties.length > 0 && target_duties[0] != null)
    {
        isDuty = true;
    }
    else
    {
        isDuty = false;
    }
  }
  else 
  {
    localStorage.setItem("task", JSON.stringify([]));
    tasksState.tasks = [];
  }

  
  if(query != "" && isDuty)
  {
    target_duties = target_duties.filter(duty => duty.text.includes(query));
  }

  if(isComp == 1 && isDuty)
  {
    target_duties = target_duties.filter(duty => duty.isCompleted !== true);
  }

  if(isDuty)
  {
    target_duties.sort(function(a, b) {
      let keyA = a.priority, keyB = b.priority;

      if (keyA == "High" && keyB != "High") return -1;
      if (keyA == "Medium" && keyB == "High") return 1;
      if (keyA == "Medium" && keyB == "Low") return -1;
      if (keyA == "Low" && keyB != "Low") return 1;
      
      return 0;
    });
  }

  if(isDuty)
  {
        return (
            <>
            <ul id="task-list">
                {target_duties.map(duty => (
                <Duty key={duty.id} duty={duty}/>
                ))}
            </ul>
            </>
        );
  }
  else
  {
        return (
            <>
            <ul id="task-list" style={{display: "flex", justifyContent: "center"}}>
                <p style={{textAlign: "center", boxShadow: "0px 0px 5px 0px #aaa", width: "200px", padding: "10px", borderRadius: "10px" }}>Duty List is Empty!</p>
            </ul>
            </>
        );
  }
  
  
}

export default Duties;