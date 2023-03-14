import "./listItem.css";

const ListItem = ({ task }) => {
  return (
    <li className="list">
      <p className="list-id">{task.id}</p>
      <p className="list-item">{task.taskItem}</p>
      <p className="list-type">{task.itemType}</p>
    </li>
  );
};

export default ListItem;
