import React, { useState } from "react";
import "../styles/ToDo.css";
import { TaskList } from "./TaskList";

export const ToDo = () => {
  const [tasks, setTasks] = useState([
    { key: 1, text: "Watch the film" },
    { key: 2, text: "Prepare to exam" },
    { key: 3, text: "Read the book" },
  ]);

  const addTask = (e) => {
    let newKey = tasks[tasks.length - 1].key + 1;
    const newTasks = { key: newKey, text: "New task" };
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
      <TaskList tasks={tasks} editTask={editTask} addTask={addTask} deleteTask={deleteTask} />
      <button className="AddBtn" onClick={addTask}>
        + Add Task
      </button>
    </div>
  );
};
