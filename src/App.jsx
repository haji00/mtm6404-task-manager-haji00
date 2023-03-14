import reactLogo from "./assets/react.svg";
import "./App.css";
import Button from "./Button/Button";
import { useState } from "react";
import { NavBar } from "./NavBar/NavBar";
import { tasks } from "./assets/tasks";
import ListItem from "./ListItem/ListItem";
import Footer from "./Footer/Footer";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <NavBar />
      <div className="card">
        <Button label="Counter disabled " enabled={false} />
        <Button initialCount={10} label="disabled" enable={false} />
        <Button initialCount={0} label="Add New Task " enabled={true} />
      </div>
      <ul className="task-list">
        {tasks.map((task) =>
          task.completed ? null : <ListItem task={task} />
        )}
      </ul>
      <Footer />
    </div>
  );
}

export default App;
