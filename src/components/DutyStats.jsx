import React from 'react';
import { useGlobalContext } from '../context/context';

const DutyStats = (taskId) => {
  
  const { tasksState } = useGlobalContext();
  console.log("Wow" , tasksState.tasks);
  let duties = null;
  
//   for(let i = 0; i < tasksDispatch.tasks.length; i++)
//   {
//     if(tasksState.tasks[i].id == taskId.taskId)
//     {
//         duties = tasksState.tasks.duties;

//         console.log(task.duties);
//     }
//   }
  

  if(Array.isArray(duties) && duties[0] != null)
  {
        const completedNoOfDuties = duties.filter(duty => duty.isCompleted).length;
        const pendingNoOfDuties = duties.length - completedNoOfDuties;
        
        return (
            <div style={{margin: "15px"}}>{pendingNoOfDuties} pending, {completedNoOfDuties} completed</div>
        );    
  }
  else
  {
        return (<p></p>);
  }
};

export default DutyStats;