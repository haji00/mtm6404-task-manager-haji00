import reactLogo from "./assets/react.svg";
import "./App.css";
import { useState } from "react";
import { NavBar } from "./NavBar/NavBar";
import { tasks } from "./assets/tasks";
import ListItem from "./ListItem/ListItem";
import Footer from "./Footer/Footer";

function App() {
  const [user, setUser] = useState();
  const [taskList, setTaskList] = useState(tasks);
  const [newItemTask, setNewItemTask] = useState("");
  const [newItemPriority, setNewItemPriority] = useState("High");
  const [showCompleted, setShowCompleted] = useState(true);

  const addItemToList = () => {
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        taskItem: newItemTask,
        priority: newItemPriority,
        status: "Incomplete",
      },
    ]);
  };

  const figureoutStatus = (id) => {
    const itemStatus = taskList[id].status;
    if (itemStatus === "Completed") {
      return "Incomplete";
    }
    return "Completed";
  };

  const saveMyChange = () => {
    localStorage.setItem("list", JSON.stringify(taskList));
  };

  const handleChange = (id) => {
    const [...taskListCopy] = taskList;
    console.log("Id", id);
    console.log("status", taskList[id].status);
    taskListCopy[id].status = figureoutStatus(id);
    setTaskList(taskListCopy);
    saveMyChange();
  };

  const handleDelete = (id) => {
    const taskListCopy = taskList.filter((task) => task.id !== id);
    console.log("Id", id);
    setTaskList(taskListCopy);
    saveMyChange();
  };

  return (
    <div className="App">
      <NavBar />
      <div className="form">
        <button
          className="add-btn"
          onClick={addItemToList}
          disabled={!newItemTask}
        >
          Add Item
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
        <label>Show All Tasks</label>
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
                onToggleStatus={() => handleChange(task.id - 1)}
                onDeleteTask={() => handleDelete(task.id)}
              />
            ) : (
              showCompleted && (
                <ListItem
                  key={task.id}
                  task={task}
                  isCompleted={true}
                  onToggleStatus={() => handleChange(task.id - 1)}
                  onDeleteTask={() => handleDelete(task.id)}
                />
              )
            )
          )}
      </ul>
      <Footer />
    </div>
  );
}

export default App;
