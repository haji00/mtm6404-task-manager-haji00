import React from 'react';
import SearchTask from "./SearchTask";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import TaskStats from './TaskStats';
import NavBar from './NavBar';

const TaskContainer = () => {
  return (
    <div id="task-container">
      <NavBar />
      <AddTask />
      <Tasks />
    </div>
  )
};

export default TaskContainer;