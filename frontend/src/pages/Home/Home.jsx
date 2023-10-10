import styles from './Home.module.css';
import Task from '../../components/Task/Task';
import Page from '../../components/Page/Page';
import { useState, useEffect } from 'react';
import {
  Redirect,
} from "react-router-dom";

const fakeApi = [
  {
    name: 'Cook Pasta',
    completed: false,
    id: 1,
  },
  {
    name: 'Get Groceries',
    completed: true,
    id: 2,
  },
  {
    name: 'Get Pasta ingredients and chocolates from safeway',
    completed: false,
    id: 3,
  },
  {
    name: 'Buy cookies',
    completed: false,
    id: 4,
  },
  {
    name: 'Look up form page',
    completed: true,
    id: 5,
  },
  {
    name: 'Learn angular',
    completed: true,
    id: 6,
  },
  {
    name: 'Learn Vue',
    completed: true,
    id: 7,
  },
  {
    name: 'Learn React',
    completed: true,
    id: 8,
  },
  {
    name: 'Learn Math',
    completed: true,
    id: 9,
  },
]

const Home = ({ isAuth }) => {
  const [taskData, setTaskData] = useState(null);

  useEffect(() => {
    setTaskData(fakeApi);
  },[]);

  if(taskData === null) return(<></>);

  return(
    <Page>
      <div className={styles['home-section']}>
        {
          taskData.map(item =>
            <Task completed={item.completed}
              key={item.id}
              taskId={item.id}
              taskData={taskData}
              setTaskData={setTaskData}
            >
              {item.name}
            </Task>
          )
        }
      </div>
    </Page>
  )
};

export default Home;