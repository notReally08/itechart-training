import React from "react";

export const TaskText = props => {
  const { text } = props;

  return (
    <p className="task__text">
      {text}
    </p>
  );
}