import React from "react";
import Task from "./Task";
import { useGlobalContext } from "../context/context";
import offlineList from "../offlineList";

const Tasks = () => {
  const { tasksState, query } = useGlobalContext();

  let isTask = false;

  if (
    localStorage.getItem("task") &&
    JSON.parse(localStorage.getItem("task")).length > 0
  ) {
    tasksState.tasks = JSON.parse(localStorage.getItem("task"));
  } else if (offlineList.length > 0) {
    localStorage.setItem("task", JSON.stringify(offlineList));
    tasksState.tasks = JSON.parse(JSON.stringify(offlineList));
  } else {
    localStorage.setItem("task", JSON.stringify([]));
    tasksState.tasks = [];
  }

  let tasks = tasksState.tasks;

  if (tasks.length > 0) {
    isTask = true;
  }

  if (query != "") {
    tasks = tasks.filter((task) => task.text.includes(query));
  }

  if (isTask) {
    return (
      <>
        <ul id="task-list">
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      </>
    );
  } else {
    return (
      <>
        <ul
          id="task-list"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <p
            style={{
              textAlign: "center",
              boxShadow: "0px 0px 5px 0px #aaa",
              width: "200px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            Task List is Empty!
          </p>
        </ul>
      </>
    );
  }
};

export default Tasks;
