import React, { useState } from 'react';
import styles from './CreateTask.module.css';
import Page from '../../components/Page/Page';
import TaskForm from '../../components/TaskForm/TaskForm';

const CreateTask = ({ projects, setAlert }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('low');
  const [project, setProject] = useState(projects[0]._id);
  const [dueDate, setDueDate] = useState('');

  const taskService = require('../../services/task');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleProjectChange = (e) => {
    console.log(e.target.value);
    setProject(e.target.value);
  }

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    console.log(project);
    e.preventDefault();
    const newTask = {
      title,
      description,
      priority,
      dueDate,
      projectId: project,
    }
    const res = await taskService.createTask(newTask);
    if(res.success) {
      setAlert({'message': res.success});
    }
  }

  return(
    <Page>
      <div className={styles["create-task-page"]}>
        <div className={styles["create-task-container"]}>
          <TaskForm
            title={title}
            description={description}
            priority={priority}
            project={project}
            dueDate={dueDate}
            titleChange={handleTitleChange}
            descriptionChange={handleDescriptionChange}
            priorityChange={handlePriorityChange}
            projectChange={handleProjectChange}
            dueDateChange={handleDueDateChange}
            handleSubmit={handleSubmit}
            projects={projects}
          >
            <h1>New Task</h1>
          </TaskForm>
        </div>
      </div>
    </Page>
  )
};

export default CreateTask;