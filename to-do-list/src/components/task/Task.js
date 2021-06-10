import "./task.less";
import React, { useState } from "react";
import { DeleteTaskButton } from "./../deleteTaskButton/DeleteTaskButton";
import { ChangeTaskStatusCheckbox } from "./../changeTaskStatusCheckBox/ChangeTaskStatusCheckbox";
import { TaskText } from "./../taskText/TaskText";
import { EditTaskButton } from "./../editTaskButton/EditTaskButton";
import { EditTaskForm } from "./../editTaskForm/EditTaskForm";

export const Task = props => {
  const { task } = props;
  const [editable, setEditable] = useState(false);
  let className = "task";

  if (task.status) {
    className += " task_done"
  }
  
  if (editable) {
    className += " task_edaitable"
  }

  return (
    <div className={className}>
      {editable ?
        <EditTaskForm setEditable={setEditable} text={task.text} id={task.id}/> :
        <div className="task__inner-container">
          <TaskText text={ task.text }/>
          <EditTaskButton setEditable={setEditable}/>
        </div>
      }
      <DeleteTaskButton id={task.id}/>
      <ChangeTaskStatusCheckbox id={task.id}/>
    </div>
  );
}