import React, { useEffect, useState } from 'react';
import Task from "./Task";
import { useGlobalContext } from '../context/context';
import { doc, getDoc, getDocs,updateDoc, collection } from "firebase/firestore";
import db from "../firebase";
import offlineList from '../offlineList';

const Tasks = () => {
  
  const {tasksState, query, tasksDispatch} = useGlobalContext();

  let isConnected = false;
  let dbDocument = null;

  
  const getDocument = async () => {

      if(isConnected == false)
      {
        await getDocs(collection(db, "tasks")).then( (querySnapshot) => {               
          const newData = querySnapshot.docs.map(
              (doc) => ( {...doc.data(), id:doc.id } )
            );

          if(newData[0].task)
          {
            tasksDispatch({ type: "GET_TASK_DATA", payload: { 'data' : JSON.parse(JSON.stringify(newData[0].task)) } });
          }
          

          return newData;
  });
    }
    else
    {
      tasksDispatch({ type: "SET_TASK_DATA", payload: { 'data' : JSON.parse(localStorage.getItem("task")) } });
    }

    
  };

  useEffect(() => {
    getDocument();
  },[]);

  

  if(localStorage.getItem("task") && JSON.parse(localStorage.getItem("task")).length > 0)
  {
    tasksState.tasks = JSON.parse(localStorage.getItem("task"));

    let objHolder = JSON.parse(localStorage.getItem("task"));

    updateDoc(doc(db, "tasks", "task"), { 'task': objHolder });

    isConnected = true;

    tasksState.isTask = true;
  }
  else
  {
    localStorage.setItem("task", JSON.stringify([]));
    tasksState.tasks = [];
    tasksState.isTask = false;
  }
  // else if(offlineList.length > 0)
  // {
  //   localStorage.setItem("task", JSON.stringify(offlineList));
  //   tasksState.tasks = JSON.parse(JSON.stringify(offlineList));

  //   let objHolder = JSON.parse(localStorage.getItem("task"));

  //   updateDoc(doc(db, "tasks", "task"), { 'task': objHolder });
  // }
  

  //setTasks(tasksState.tasks);


  // if(tasks.length > 0)
  // {
  //   setIsTask(true);
  // }

  
  // if(query != "")
  // {
  //   tasks = tasks.filter(task => task.text.includes(query));
  // }

  if(tasksState.isTask)
  {
      return (
        <>
          <ul id="task-list">
            {tasksState.tasks.map(task => (
              <Task key={task.id} task={task}/>
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
            <p style={{textAlign: "center", boxShadow: "0px 0px 5px 0px #aaa", width: "200px", padding: "10px", borderRadius: "10px" }}>Task List is Empty!</p>
        </ul>
        </>
    );
  }
}

export default Tasks;
