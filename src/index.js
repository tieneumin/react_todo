import React from "react";
import ReactDOM from "react-dom/client";

import TodoList from "./components/todo_list";
import AddTodoForm from "./components/add_todo_form";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div
    className="card rounded shadow-sm"
    style={{ maxWidth: "500px", margin: "60px auto" }}
  >
    <div className="card-body">
      <h3 className="card-title mb-3">My Todo List</h3>
      <TodoList />
      <div className="mt-4">
        <AddTodoForm />
      </div>
    </div>
  </div>
);
