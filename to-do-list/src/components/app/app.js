import React from "react";
import { TaskListContainer } from "./../task-list-container/task-list-container";
import { AddNewTaskForm } from "./../add-new-task-form/add-new-task-form"

function App() {
  return (
    <>
      <AddNewTaskForm/>
      <TaskListContainer/>
    </>
  );
}

export default App;