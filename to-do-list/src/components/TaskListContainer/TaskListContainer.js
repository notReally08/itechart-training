import React from "react";
import { useSelector } from "react-redux";
import { TaskContainer } from "../TaskContainer/TaskContainer";

export const TaskListContainer = () => {
  const tasks = useSelector(state => state.taskList.tasks);

  return (
    tasks.map(task => {
      return <TaskContainer key={task.id} task={task}/>;
    })
  );
}