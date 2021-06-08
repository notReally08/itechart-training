import "./editTaskButton.less";
import React from "react";

export const EditTaskButton = (props) => {
  const { setEditable } = props;

  return (
    <span className="edit-task-button" onClick={() => setEditable(true)}></span>
  );
}