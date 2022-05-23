import React from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" className={styles.addTask} placeholder="Add Task..." />
      <button data-cy="add-task-button" className={styles.addButtom}>+</button>
    </div>
  );
};

export default AddTask;
