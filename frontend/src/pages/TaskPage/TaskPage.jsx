import { useState, useEffect } from 'react';
import Page from '../../components/Page/Page';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import LinkRoute from '../../components/LinkRoute/LinkRoute';
import styles from './TaskPage.module.css';
import { useParams } from 'react-router-dom';

const taskService = require('../../services/task');

const TaskPage = () => {
  const taskId = useParams().id;
  const [task, setTask] = useState({});

  useEffect(() => {
    const fetchTaskData = async () => {
      const fetchedTask = await taskService.getTask(taskId);
      const date = new Date(fetchedTask.dueDate);
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      const formattedDate = date.toLocaleDateString(undefined, options);
      setTask({...fetchedTask, dueDate: formattedDate});
    };

    fetchTaskData();
  },[]);

  return (
    <Page>
      <div className={styles['task-page']}>
        <div className={styles['task-page-container']}>
          <Card>
            <div className={styles['task-item-container']}>
              <h2>{task?.title}</h2>
              <ul className={styles['task-item']}>
                <li>Description: </li>
                <li>{task?.description}</li>
              </ul>
              <ul className={styles['task-item']}>
                <li>Priority:</li>
                <li>{task?.priority}</li>
              </ul>
              <ul className={styles['task-item']}>
                <li>Due Date: </li>
                <li>{task?.dueDate}</li>
              </ul>
              <LinkRoute to={`/edit-task/${taskId}`}>
                <Button noBorder={false}>Edit Task</Button>
              </LinkRoute>
            </div>
          </Card>
        </div>
      </div>
    </Page>
  );
};

export default TaskPage;
