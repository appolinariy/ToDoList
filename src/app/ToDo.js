import React, { useState } from "react";
import "../styles/ToDo.css";
import { showTask } from "../app/showTasks";

export const ToDo = () => {
  const [tasks, setTasks] = useState([
    { key: 1, text: "Watch the film" },
    { key: 2, text: "Prepare to exam" },
    { key: 3, text: "Read the book" },
  ]);

  const showTasks = (array) => {
    let newTasks = tasks.map((task) => (
      <div className="Task">
        <input type="checkbox" id={task.key} />
        <input
          type="text"
          value={task.text}
          onChange={(event) => editTask(task, event.target.value)}
        />
        <button className="DeleteBtn" onClick={() => deleteTask(task)}>
          ×
        </button>
      </div>
    ));
    return newTasks.map((task) => task);
  };

  const addTask = (array) => {
    const newTasks = { key: tasks.length + 1, text: "New task" };
    setTasks([...tasks, newTasks]);
  };

  const editTask = (task, value) => {
    const newTasks = tasks.map((el) => {
      if (el.key === task.key) {
        return { ...el, text: value };
      }
      return el;
    });
    setTasks(newTasks);
  };

  const deleteTask = (task) => {
    const newTasks = tasks.filter((el) => el.key !== task.key);
    setTasks(newTasks);
  };

  return (
    <div className="ToDoList">
      <div className="Title">
        <h2>Simple To Do List</h2>
      </div>
      <div className="TaskBlock">{showTasks(tasks)}</div>
      <button
        className="AddBtn"
        onClick={(event) => {
          addTask();
        }}
      >
        + Add Task
      </button>
    </div>
  );
};
