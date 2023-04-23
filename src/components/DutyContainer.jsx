import React from 'react';
import SearchDuty from "./SearchDuty";
import Duties from "./Duties";
import AddDuty from "./AddDuty";
import DutyStats from './DutyStats';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';

const DutyContainer = () => {

  let {taskId} = useParams();
  return (
    <div id="task-container">
      <NavBar />
      <AddDuty task_id={taskId}/>
      <Duties taskId={taskId}/>
    </div>
  )
};

export default DutyContainer;