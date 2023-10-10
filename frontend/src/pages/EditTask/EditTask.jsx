import React, { useState } from 'react';
import styles from './EditTask.module.css';
import Page from '../../components/Page/Page';
import TaskForm from '../../components/TaskForm/TaskForm';


const EditTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [project, setProject] = useState('Inbox');
  const [dueDate, setDueDate] = useState('');

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
    setProject(e.target.value);
  }

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('due date', dueDate, ' project ', project, ' title ', title, ' priotity ', priority, ' description ', description);
  }


  return(
    <Page>
      <div className={styles["edit-task-page"]}>
        <div className={styles["edit-task-container"]}>
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
          >
            <h1>Edit Task</h1>
          </TaskForm>
        </div>
      </div>
    </Page>
  )
};

export default EditTask;