import React from 'react';
import CheckBox from '../CheckBox/CheckBox';
import FaIcon from '../FaIcon/FaIcon';
import Button from '../Button/Button';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import LinkRoute from '../LinkRoute/LinkRoute';
import styles from './Task.module.css';
const taskService = require('../../services/task');

const Task = ({
  completed,
  taskId,
  dueDate,
  tasks,
  borderColor='orange',
  setTasks,
  setAlert,
  children,
}) => {

  const date = new Date(dueDate);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const formattedDate = date.toLocaleDateString(undefined, options);

  const toggleComplete = async (taskId) => {
    // Create a copy of the project's tasks
    const foundTask = tasks?.find(task => task._id === taskId);
    const updateTask = { ...foundTask, completed: !foundTask.completed }
    const res = await taskService.updateTask(taskId, updateTask);

    if(res.success) {
      const updatedTasks = tasks.map(task => {
        if (task._id === taskId) {
          // Toggle the 'completed' property for the specific task
          return { ...task, completed: !task.completed };
        }
        return task;
      });
  
      // Update the project state with the updated tasks
      setTasks(updatedTasks);
    }
  };

  const handleDeleteTask = async (taskId) => {
    const res = await taskService.deleteTask(taskId);
    if(res.success) {
      setAlert({'message': res.success});
      const deletedTasks = tasks?.filter(task => task._id !== taskId);
      setTasks(deletedTasks);
    }
  };

  return (
    <div className={`${styles['task-container']} ${styles[`${borderColor}`]}`}>
      <CheckBox handleCompleted={() => toggleComplete(taskId)} completed={completed}>
        {children}
      </CheckBox>
      <div className={styles['task-items']}>
        <div>
          <p>{formattedDate}</p>
        </div>
        <LinkRoute to={`/task/${taskId}`}>
          <Button noBorder={false}>Details</Button>
        </LinkRoute>
        <Button handleClick={() => handleDeleteTask(taskId)}>
          <FaIcon iconName={faTrashCan} size='sm' />
        </Button>
      </div>
    </div>
  );
};

export default Task;
