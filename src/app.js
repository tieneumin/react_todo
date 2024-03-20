import { useState } from "react";

import List from "./components/list";
import Form from "./components/form";

export default function App() {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  return (
    <div
      className="card shadow-sm"
      style={{ maxWidth: "500px", margin: "60px auto" }}
    >
      <div className="card-body">
        <h3 className="mb-3">My To-Do List</h3>
        <List tasks={tasks} setTasks={setTasks} />
        <Form tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}
