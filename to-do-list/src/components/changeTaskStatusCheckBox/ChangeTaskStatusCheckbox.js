import "./changeTaskStatusCheckbox.less";
import React from "react";
import { useDispatch } from "react-redux";
import { setTaskStatus } from "../../redux/actions/setTaskStatus";

export const ChangeTaskStatusCheckbox = (props) => {
  const dispatch = useDispatch();
  const { id } = props;

  const changeTaskStatus = (e) => {
    if (e.target.type === "checkbox") {
      dispatch(setTaskStatus({id, status: e.target.checked}));
    }
  }

  return (
    <label className="checkbox-label">
      <input name="toggle-status" id="toggle-status" className="change-task-status-checkbox" type="checkbox" onChange={changeTaskStatus} />
      <span className="checkbox-label__icon"></span>
    </label>
  );
}