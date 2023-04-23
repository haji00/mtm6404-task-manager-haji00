import React from 'react';
import SearchTask from "./SearchTask";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import TaskStats from './TaskStats';
import NavBar from './NavBar';
import About from './About';

const AboutContainer = () => {
  return (
    <div id="task-container">
      <NavBar />
      <About />
    </div>
  )
};

export default AboutContainer;