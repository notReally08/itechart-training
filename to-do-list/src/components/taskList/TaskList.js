import "./taskList.less";
import React from "react";
import { useSelector } from "react-redux";
import { Task } from "../task/Task";

export const TaskList = () => {
  const tasks = useSelector(state => state.taskList.tasks);

  return (
    <section className="task-list">
      { tasks.map(task => {
        return <Task key={ task.id } task={ task }/>;
      }) }
    </section>
  );
}