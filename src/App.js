import "./App.css";
import { TaskCreator } from "./components/TaskCreator.js";
import { useState, useEffect } from "react";

function App() {
  const [taskItems, setTaskItems] = useState([]);

  function createNewTask(taskName) {
    console.log(taskItems.find((task) => task.name === taskName));
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  }

useEffect(() => {
  let data = localStorage.getItem('tasks')
  
  if(data){
    setTaskItems(JSON.parse(data))
  }

}, [])


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems)); 
  }, [taskItems]);



  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />

      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>

        <tbody>
          {taskItems.map((task) => (
            <tr key={task.name}>
              <td>{task.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
