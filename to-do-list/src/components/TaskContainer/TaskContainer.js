import React from "react";

export const TaskContainer = props => {
  const { task } = props;
  
  return (
    <p>{task.text} {task.status ? "done" : "inProgress"}</p>
  );
}