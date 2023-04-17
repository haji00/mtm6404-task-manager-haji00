import "./App.css";
import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { tasks } from "./assets/tasks";
import ListItem from "./components/ListItem";
import Footer from "./components/Footer";
import { listContext } from "./context/listContext";
import { collection, addDoc } from "firebase/firestore";
import db from "./db";

function App() {
  const [user, setUser] = useState();
  const [taskList, setTaskList] = useState(tasks);
  const [newItemTask, setNewItemTask] = useState("");
  const [newItemPriority, setNewItemPriority] = useState("High");
  const [showCompleted, setShowCompleted] = useState(true);
  const [task, setTodo] = useState("");

  const addTodo = async (ev) => {
    ev.preventDefault();
    const tasksCollection = collection(db, "groceries");
    const document = await addDoc(tasksCollection, {
      task: task,
    });
    console.log(document.id);
  };

  const addItemToList = () => {
    setTaskList((prevTaskList) => [
      ...prevTaskList,
      {
        id: prevTaskList.length + 1,
        taskItem: newItemTask,
        priority: newItemPriority,
        status: "Incomplete",
      },
    ]);
  };

  const figureoutStatus = (id) => {
    const itemStatus = taskList[id]?.status;
    if (itemStatus === "Completed") {
      return "Incomplete";
    }
    return "Completed";
  };

  const saveMyChange = () => {
    localStorage.setItem("list", JSON.stringify(taskList));
  };

  const handleChange = (id) => {
    const taskIndex = taskList.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      const taskListCopy = [...taskList];
      taskListCopy[taskIndex].status = figureoutStatus(taskIndex);
      setTaskList(taskListCopy);
      saveMyChange();
    }
  };

  const handleDelete = (id) => {
    const taskListCopy = taskList.filter((task) => task.id !== id);
    console.log("Id", id);
    setTaskList(taskListCopy);
    saveMyChange();
  };

  return (
    <listContext.Provider value="list">
      <div className="main-container">
        <NavBar />
        <div className="form">
          <button
            className="add-btn"
            onClick={addItemToList}
            disabled={!newItemTask}
          >
            Add List
          </button>
          <input
            value={newItemTask}
            onChange={(event) => {
              setNewItemTask(event.target.value);
            }}
          />
          <select
            onChange={(ev) => {
              setNewItemPriority(ev.target.value);
            }}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="show-completed">
          <label>Show All Lists</label>
          <input
            id="showCompleted"
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
          />
        </div>

        <ul className="task-list">
          {taskList
            .sort((a, b) => {
              if (a.priority === "High") {
                return -1;
              } else if (a.priority === "Low") {
                return 1;
              } else if (a.priority === "Medium") {
                return 0;
              }
            })
            .map((task) =>
              task.status !== "Completed" ? (
                <ListItem
                  key={task.id}
                  task={task}
                  isCompleted={false}
                  onToggleStatus={() => handleChange(task.id)}
                  onDeleteTask={() => handleDelete(task.id)}
                />
              ) : (
                showCompleted && (
                  <ListItem
                    key={task.id}
                    task={task}
                    isCompleted={true}
                    onToggleStatus={() => handleChange(task.id)}
                    onDeleteTask={() => handleDelete(task.id)}
                  />
                )
              )
            )}
        </ul>

        <Footer />
      </div>
    </listContext.Provider>
  );
}

export default App;
