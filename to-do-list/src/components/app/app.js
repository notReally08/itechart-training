import "./app.less";
import React from "react";
import { TaskList } from "../taskList/TaskList";
import { AddNewTaskForm } from "../addNewtaskForm/AddNewTaskForm";

function App() {
  return (
    <main className="main">
      <div className="container">
        <h1 className="main-title">To-do-list</h1>
        <AddNewTaskForm/>
        <TaskList/>
      </div>
    </main>
  );
}

export default App;