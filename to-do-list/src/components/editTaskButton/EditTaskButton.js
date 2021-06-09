import "./editTaskButton.less";
import React, { useCallback } from "react";

export const EditTaskButton = (props) => {
  const { setEditable } = props;

  return (
    <span className="edit-task-button" onClick={ useCallback(() => setEditable(true), [setEditable] )}></span>
  );
}