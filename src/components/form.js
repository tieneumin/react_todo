import { useState } from "react";

export default function Form(props) {
  const { tasks, setTasks } = props;
  const [task, setTask] = useState("");
  // console.log(task);
  return (
    <form
      className="d-flex mt-4"
      onSubmit={(event) => {
        event.preventDefault();
        setTasks([...tasks, { id: Math.random(), name: task, status: 0 }]);
        setTask(""); // empties input field
      }}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Add new to-do..."
        required
        value={task}
        onChange={(event) => {
          setTask(event.target.value);
        }}
      />
      <button className="btn btn-primary ms-2">Add</button>
    </form>
  );
}
