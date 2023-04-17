import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { lists, work, groceries, home } from "../lists.js";
import "./list.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ListItem from "./ListItem";

const List = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("This is the id", id);
  }, [id]);

  const [taskList, setTaskList] = useState([]);
  const [newItemTask, setNewItemTask] = useState("");
  const [newItemPriority, setNewItemPriority] = useState("High");
  const [showCompleted, setShowCompleted] = useState(true);
  const [myLists, setMyLists] = useState("");
  const [lists, setLists] = useState([
    { id: 0, slug: "/list/work", name: "work" },
    { id: 1, slug: "/list/groceries", name: "groceries" },
    { id: 2, slug: "/list/home", name: "home" },
  ]);

  const addItemToList = () => {
    setTaskList([
      ...taskList,
      {
        id: taskList.length + 1,
        task: newItemTask,
        priority: newItemPriority,
        status: "Incomplete",
      },
    ]);
  };

  const figureOutStatus = (id) => {
    const item = taskList.find((task) => task.id === id);
    if (item.status === "Completed") {
      return "Incomplete";
    }
    return "Completed";
  };

  const saveMyChange = () => {
    localStorage.setItem("list", JSON.stringify(taskList));
  };

  const handleChange = (id) => {
    const taskListCopy = [...taskList];
    taskListCopy[id].status = figureOutStatus(id);
    setTaskList(taskListCopy);
    saveMyChange();
  };

  const handleDelete = (id) => {
    const taskListCopy = taskList.filter((task) => task.id !== id);
    console.log("Id", id);
    setTaskList(taskListCopy);
    saveMyChange();
  };

  const deleteList = (listIdToDelete) => {
    setLists((prevLists) =>
      prevLists.filter((list) => list.id !== listIdToDelete)
    );
  };

  return (
    <div className="main-container">
      <NavBar />
      <div className="form">
        <button
          className="add-btn"
          onClick={addItemToList}
          disabled={!newItemTask}
        >
          Add Task
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
      <h1 className="header1">
        {id} todo list!
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-emoji-smile"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
        </svg>
      </h1>
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
          .map((item) => {
            return (
              <ListItem
                key={item.id}
                task={item.task}
                priority={item.priority}
                isCompleted={item.status === "Completed"}
                onToggleStatus={() => handleChange(item.id)}
                onDeleteTask={() => handleDelete(item.id)}
              />
            );
          })}
      </ul>

      {id === "work" &&
        work.map((item) => (
          <div className="list-ind">
            <div>{item.task}</div>
            <div>{item.priority}</div>
            <div>{item.status}</div>
          </div>
        ))}
      {id === "groceries" &&
        groceries.map((item) => (
          <div className="list-ind">
            <div>{item.task}</div>
            <div>{item.priority}</div>
            <div>{item.status}</div>
          </div>
        ))}
      {id === "home" &&
        home.map((item) => (
          <div className="list-ind">
            <div>{item.task}</div>
            <div>{item.priority}</div>
            <div>{item.status}</div>
          </div>
        ))}
      <div className="btn-container">
        <button onClick={() => navigate(-1)} className="status-btn">
          <div className="back-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-arrow-left-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
              />
            </svg>
            <p>Go back</p>
          </div>
        </button>

        <button onClick={() => deleteList(item.id)} className="delete-btn">
          Delete List
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default List;
