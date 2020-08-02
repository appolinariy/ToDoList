import React from "react";
import "../styles/ToDo.css";

export const TaskList = (props) => {
  let tasks = props.tasks.map((task) => (
    <div className="Task" key={task.key}>
      <input type="checkbox" />
      <input
        type="text"
        value={task.text}
        onChange={(event) => props.editTask(task, event.target.value)}
      />
      <button className="DeleteBtn" onClick={() => props.deleteTask(task)}>
        ×
      </button>
    </div>
  ));

  return <div className="TaskBlock">{tasks}</div>;
};
