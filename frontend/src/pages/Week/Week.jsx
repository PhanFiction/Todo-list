import './Week.css';
import Task from '../../components/Task/Task';
import Page from '../../components/Page/Page';
import { useFetchWeeklyTasks } from '../../hooks/useFetchData';

const Week = ({ setAlert }) => {
  const { tasks, setTasks } = useFetchWeeklyTasks(); 

  return(
    <Page>
      <div className={'container'}>
        {/*This displays Project TASKS*/}
        {
          tasks ?
          tasks?.map((item, index) =>
            <Task
              key={index}
              completed={item.completed}
              taskId={item._id}
              dueDate={item.dueDate}
              setTasks={setTasks}
              tasks={tasks}
              setAlert={setAlert}
            >
              {item.title}
            </Task>
          )
          : <h1>Empty List</h1>
        }
      </div>
    </Page>
  )
};

export default Week;