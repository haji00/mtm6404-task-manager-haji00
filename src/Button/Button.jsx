import { useState } from "react";
import "./button.css";

const Button = ({ initialCount = 0, label, enabled, children }) => {
  const [count, setCount] = useState(initialCount);
  return enabled ? (
    <button
      className="custom-button"
      onClick={() => {
        if (enabled) {
          setCount(count + 1);
        }
      }}
    >
      {!!children && children}
      {label && label}
      {count}
    </button>
  ) : (
    <button className="button-disabled">This button is disabled</button>
  );
};

export default Button;
