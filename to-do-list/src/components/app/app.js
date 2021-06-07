import React from "react";
import { TaskListContainer } from "../taskListContainer/TaskListContainer";
import { AddNewTaskForm } from "../addNewtaskForm/AddNewTaskForm"

function App() {
  return (
    <>
      <AddNewTaskForm/>
      <TaskListContainer/>
    </>
  );
}

export default App;