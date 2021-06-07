import React from "react";
import { TaskListContainer } from "../TaskListContainer/TaskListContainer";
import { AddNewTaskForm } from "../AddNewtaskForm/AddNewTaskForm"

function App() {
  return (
    <>
      <AddNewTaskForm/>
      <TaskListContainer/>
    </>
  );
}

export default App;