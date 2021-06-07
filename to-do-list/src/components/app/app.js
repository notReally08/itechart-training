import React from "react";
import { TaskListContainer } from "../task-list-container/TaskListContainer";
import { AddNewTaskForm } from "../add-new-task-form/AddNewTaskForm"

function App() {
  return (
    <>
      <AddNewTaskForm/>
      <TaskListContainer/>
    </>
  );
}

export default App;