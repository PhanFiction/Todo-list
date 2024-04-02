import './Today.css';
import { useFetchDailyTasks } from '../../hooks/useFetchData';
import Page from '../../components/Page/Page';
import Task from '../../components/Task/Task';

const Today = ({ setAlert }) => {
  const { tasks, setTasks } = useFetchDailyTasks();
  return(
    <Page>
      <div className='section'>
        <div className='container'>
          {/*This displays Today's Task*/}
          {tasks === undefined || tasks.length === 0 ? <h3>You have no task due today</h3>
            : tasks.map((item, index) =>
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
          }
        </div>
      </div>
    </Page>
  )
};

export default Today;