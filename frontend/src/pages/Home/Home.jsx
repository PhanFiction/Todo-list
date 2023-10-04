import './Home.css';
import Task from '../../components/Task/Task';
import { useState, useEffect } from 'react';

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
  }
]

const Home = () => {
  const [taskData, setTaskData] = useState(null);

  useEffect(() => {
    setTaskData(fakeApi);
  },[])

  if(taskData === null) return(<></>);

  return(
    <section className="home-section">
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
    </section>
  )
};

export default Home;