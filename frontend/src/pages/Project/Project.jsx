import React, { useState, useEffect } from 'react';
import Page from "../../components/Page/Page";
import Task from "../../components/Task/Task";
import styles from './Project.module.css';
import {
  useParams,
} from "react-router-dom";

const projectService = require('../../services/project');
const taskService = require('../../services/task');

const Project = ({ setAlert }) => {
  const [project, setProjects] = useState([]);
  const [complete, isComplete] = useState('');
  const projectId = useParams().id;

  useEffect(() => {
    projectService.getProject(projectId).then(data => setProjects(data));
  }, [projectId]);

  const toggleComplete = async (taskId) => {
    // Create a copy of the project's tasks
    const foundTask = project.tasks.find(task => task._id === taskId);
    console.log(foundTask);
    const updateTask = {
      ...foundTask,
      completed: !foundTask.completed,
    }
    const res = await taskService.updateTask(taskId, updateTask);

    if(res.success) {
      const updatedTasks = project.tasks.map(task => {
        if (task._id === taskId) {
          // Toggle the 'completed' property for the specific task
          return { ...task, completed: !task.completed };
        }
        return task;
      });
  
      // Update the project state with the updated tasks
      setProjects({ ...project, tasks: updatedTasks });
    }
  };

  const handleDeleteTask = async (taskId) => {
    const res = await taskService.deleteTask(taskId);
    if(res.success) {
      setAlert({'message': res.success});
      const deletedTasks = project.tasks.filter(task => task._id !== taskId);
      setProjects({ ...project, tasks: deletedTasks });
    }
  };

  return(
    <Page>
      <div className={styles['project-section']}>
        <h1>Project: { project.title }</h1>
        <div>
          {project.tasks === undefined || project.tasks.length === 0 ? <h3>Project is empty</h3>
            : project.tasks.map((item, index) =>
              <Task completed={item.completed}
                key={index}
                taskId={item._id}
                taskData={project}
                setTaskData={setProjects}
                dueDate={item.dueDate}
                toggleComplete={toggleComplete}
                handleDelete={handleDeleteTask}
                complete={complete}
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

export default Project;