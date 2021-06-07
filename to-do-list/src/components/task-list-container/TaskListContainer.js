import React from "react";
import { useSelector } from "react-redux";
import { TaskContainer } from "../task-container/TaskContainer";

export const TaskListContainer = () => {
  const tasks = useSelector((state) => state.taskList.tasks);

  return (
    tasks.map((task) => {
      return <TaskContainer key={task.id} task={task}/>
    })
  )
}