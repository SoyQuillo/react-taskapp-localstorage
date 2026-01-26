import React from "react";
import { useState } from "react";

export function TaskCreator() {
  const [newTaskName, setNewTaskName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("tasks", newTaskName);
    setNewTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        onChange={(e) => setNewTaskName(e.target.value)}
        value={newTaskName}
      />
      <button onClick={() => alert(newTaskName)}>Save Task</button>
    </form>
  );
}

export default TaskCreator;
