import { useState, useEffect } from 'react';
import styles from './EditTask.module.css';
import Page from '../../components/Page/Page';
import TaskForm from '../../components/TaskForm/TaskForm';
import { useParams } from 'react-router-dom';
import { useFetchProjects } from '../../hooks/useFetchData';

const taskService = require('../../services/task');

const EditTask = ({ setAlert }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [project, setProject] = useState('Inbox');
  const [dueDate, setDueDate] = useState('');
  const [task, setTask] = useState({});
  const { projects } = useFetchProjects();

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handlePriorityChange = (e) => setPriority(e.target.value);
  const handleProjectChange = (e) => setProject(e.target.value);
  const handleDueDateChange = (e) => setDueDate(e.target.value);

  const taskId = useParams().id;

  useEffect(() => {
    const fetchTaskData = async () => {
      const fetchedTask = await taskService.getTask(taskId);
      const date = new Date(fetchedTask.dueDate);
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      const formattedDate = date.toLocaleDateString(undefined, options);
      setTask({...fetchedTask, dueDate: formattedDate});
      console.log(fetchedTask);
    };

    fetchTaskData();
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      priority,
      dueDate,
      projectId: project,
    }

    try {
      const res = await taskService.updateTask(taskId, newTask);
      if(res.success) setAlert({'message': res.success});
    } catch(error) {
      console.log('failed to updated task ', error);
    }
  }

  return(
    <Page>
      <div className={styles["edit-task-page"]}>
        <div className={styles["edit-task-container"]}>
          <TaskForm
            title={task?.title}
            description={task?.description}
            priority={task?.priority}
            projects={projects}
            dueDate={dueDate}
            titleChange={handleTitleChange}
            descriptionChange={handleDescriptionChange}
            priorityChange={handlePriorityChange}
            projectChange={handleProjectChange}
            dueDateChange={handleDueDateChange}
            handleSubmit={handleSubmit}
          >
            <h1>Edit Task</h1>
          </TaskForm>
        </div>
      </div>
    </Page>
  )
};

export default EditTask;