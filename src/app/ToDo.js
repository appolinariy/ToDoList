import React, { useState } from "react";
import "../styles/ToDo.css";

export const ToDo = () => {
  const [Tasks, setTasks] = useState([
    { key: 1, text: "Watch the film" },
    { key: 2, text: "Prepare to exam" },
    { key: 3, text: "Read the book" },
  ]);

  const showTasks = (array) => {
    let tasks = Tasks.map((task) => (
      <div className="Task">
        <input type="checkbox" id={task.key} />
        <input
          type="text"
          value={task.text}
          onChange={(event) => editTask(task, event.target.value)}
        />
        <button className="DeleteBtn" onClick={(event) => deleteTask(task)}>
          ×
        </button>
      </div>
    ));
    return tasks.map((task) => task);
  };

  const addTask = (array) => {
    let oldTasks = Tasks;
    const newTask = { key: oldTasks.length + 1, text: "New task" };
    setTasks((Tasks) => [...oldTasks, newTask]); //Правильно ли делать так?
  };

  const editTask = (task, value) => {
    let oldTasks = Tasks;
    oldTasks.map((el) => {
      if (el.key === task.key) {
        el.text = value;
      }
    });
    setTasks((Tasks) => [...oldTasks]); //Правильно ли делать так?
  };

  const deleteTask = (task) => {
    console.log(task.key);
    let oldTasks = Tasks;
    let newTasks = oldTasks.filter((el) => el.key !== task.key);
    setTasks((Tasks) => [...newTasks]); //Правильно ли делать так?
  };

  return (
    <div className="ToDoList">
      <div className="Title">
        <h2>Simple To Do List</h2>
      </div>
      <div className="TaskBlock">{showTasks(Tasks)}</div>
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
