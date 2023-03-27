import "./listItem.css";

const ListItem = ({ task, onToggleStatus, onDeleteTask }) => {
  const handleStatusToggle = () => {
    onToggleStatus(task.id);
  };

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  return (
    <div className="container">
      <li className="list">
        <p className="list-item">{task.taskItem}</p>
        <p className="list-type">{task.priority}</p>
      </li>
      <div className="buttons">
        <button className="status-btn" onClick={handleStatusToggle}>
          {task.status}
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ListItem;
