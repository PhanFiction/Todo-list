import styles from './Task.module.css';
import CheckBox from '../CheckBox/CheckBox';
import FaIcon from '../FaIcon/FaIcon';
import Button from '../Button/Button';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import LinkRoute from '../LinkRoute/LinkRoute';

const Task = ({ completed, taskId, setTaskData, taskData, children }) => {
  const [complete, isComplete] = useState(completed);
  const randomColors = ['border-l-orange', 'border-l-green', 'border-l-red', 'border-l-blue'];

  const toggleComplete = (taskId) => {
    isComplete(!complete);
  };

  const handleDelete = (taskId) => {
    const deletedTask = taskData.filter(item => item.id !== taskId);
    setTaskData(deletedTask);
  };

  return(
    <div
      className={`${styles['task-container']} ${
        randomColors[Math.floor(Math.random() * 4)]
      }`}
    >
      <CheckBox handleCompleted={() => toggleComplete(taskId)} completed={complete}>
        {children}
      </CheckBox>
      <div className={styles['task-items']}>
        <LinkRoute to={`/task/${taskId}`}>
          <Button noBorder={false}>Details</Button>
        </LinkRoute>
        <Button handleClick={() => handleDelete(taskId)}>
          <FaIcon iconName={faTrashCan} size="sm" onClick={handleDelete} />
        </Button>
      </div>
    </div>
  )
};

export default Task;