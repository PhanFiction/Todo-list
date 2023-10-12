import React, { useState, useEffect } from 'react';
import Page from "../../components/Page/Page";
import Task from "../../components/Task/Task";
import styles from './Project.module.css';
import {
  useParams,
} from "react-router-dom";

const projectService = require('../../services/project');

const Project = () => {
  const [project, setProjects] = useState([]);
  const projectId = useParams().id;

  useEffect(() => {
    projectService.getProject(projectId).then(data => setProjects(data));
    projectService.getProject(projectId).then(data => console.log(data));
  }, [projectId]);

  return(
    <Page>
      <div className={styles['project-section']}>
        <h1>Project: { project.title }</h1>
        <div>
          {project.tasks === undefined || project.tasks.length === 0 ? <h2>Project is empty</h2>
            : project.tasks.map((item, index) =>
              <Task completed={item.completed}
                key={index}
                taskId={item.id}
                taskData={project}
                setTaskData={setProjects}
              >
                {item.name}
              </Task>
            )
          }
        </div>
      </div>
    </Page>
  )
};

export default Project;