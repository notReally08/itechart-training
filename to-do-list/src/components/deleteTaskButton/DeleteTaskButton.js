import "./deleteTaskButton.less";
import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteTaskById } from "../../redux/actions/deleteTaskById";

export const DeleteTaskButton = props => {
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const { id } = props;

  const deleteTask = useCallback(
    () => {
      setDisabled(true);
      dispatch(deleteTaskById(id));
    },
    [dispatch, id]
  )

  return (
    <span className="delete-task-button" onClick={() => deleteTask()} disabled={disabled}></span>
  );
}