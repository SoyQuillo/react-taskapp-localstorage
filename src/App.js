import "./App.css";
import { TaskCreator } from "./components/TaskCreator.js";
import { useState, useEffect } from "react";
import { TaskTable } from "./components/TaskTable.js";
import { VisibilityControl } from "./components/VisibilityControl.js";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createNewTask(taskName) {
    console.log(taskItems.find((task) => task.name === taskName));
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  }

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t,
      ),
    );
  };

  const cleanTasks = () => {  

    setTaskItems(taskItems.filter(task => !task.done))
    setShowCompleted(false)
  }

  useEffect(() => {
    let data = localStorage.getItem("tasks");

    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks={taskItems} toggleTask={toggleTask} />
      <VisibilityControl 
        isChecked = {showCompleted}
        setShowCompleted={(checked) => setShowCompleted(checked)}
        cleanTasks={cleanTasks}
      
      />

      {showCompleted && (
        <TaskTable
          tasks={taskItems}
          toggleTask={toggleTask}
          showCompleted={showCompleted}
        />
      )}
    </div>
  );
}

export default App;
