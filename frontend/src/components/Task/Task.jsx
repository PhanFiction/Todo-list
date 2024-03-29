import React from 'react';
import CheckBox from '../CheckBox/CheckBox';
import FaIcon from '../FaIcon/FaIcon';
import Button from '../Button/Button';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import LinkRoute from '../LinkRoute/LinkRoute';
import styles from './Task.module.css';

const Task = ({
  completed,
  taskId,
  toggleComplete,
  handleDelete,
  dueDate,
  borderColor,
  children,
}) => {

  const date = new Date(dueDate);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const formattedDate = date.toLocaleDateString(undefined, options);

  return (
    <div
      className={`${styles['task-container']} ${styles[`${borderColor}`]}`}
    >
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
        <Button handleClick={() => handleDelete(taskId)}>
          <FaIcon iconName={faTrashCan} size='sm' onClick={handleDelete} />
        </Button>
      </div>
    </div>
  );
};

export default Task;
