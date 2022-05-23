import React from "react";
import AddTask from "./AddTask/AddTask";
import tasks from "../data/tasks.json"
import Tasks from "./Tasks/Tasks";
import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader />
      <AddTask />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default TaskApp;
