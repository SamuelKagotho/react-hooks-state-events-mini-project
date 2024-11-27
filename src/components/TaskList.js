import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks }) {
  const handleDelete = (taskToDelete) => {
    setTasks(tasks.filter((task) => task.text !== taskToDelete.text));
  };

  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;
