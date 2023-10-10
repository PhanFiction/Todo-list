import React from 'react';
import Page from '../../components/Page/Page';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import LinkRoute from '../../components/LinkRoute/LinkRoute';
import styles from './TaskPage.module.css';
import { useParams } from 'react-router-dom';

const TaskPage = () => {
  const { id } = useParams();
  return (
    <Page>
      <div className={styles['task-page']}>
        <div className={styles['task-page-container']}>
          <Card>
            <div className={styles['task-item-container']}>
              <h2>Swim</h2>
              <ul className={styles['task-item']}>
                <li>Description:</li>
                <li>None</li>
              </ul>
              <ul className={styles['task-item']}>
                <li>Project:</li>
                <li>Gym</li>
              </ul>
              <ul className={styles['task-item']}>
                <li>Priority</li>
                <li>Medium</li>
              </ul>
              <ul className={styles['task-item']}>
                <li>Due Date:</li>
                <li>June 8th, 2021</li>
              </ul>
              <LinkRoute to={`/edit-task/${id}`}>
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
