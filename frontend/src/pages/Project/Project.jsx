import React, { useState, useEffect } from 'react';
import Page from "../../components/Page/Page";
import Task from "../../components/Task/Task";
import './Project.css';
import { useParams } from "react-router-dom";

const projectService = require('../../services/project');

const Project = ({ setAlert }) => {
  const [project, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const projectId = useParams().id;

  useEffect(() => {
    // fetch tasks from project id
    const fetchData = async () => {
      const fetchedProject = await projectService.getProject(projectId);
      setTasks(fetchedProject.tasks);
      setProjects(fetchedProject);
    }
    fetchData();
  }, [projectId]);

  return(
    <Page>
      <div className='section'>
        <h1>Project: { project.title }</h1>
        <div className='container'>
          {/*This displays Project TASK*/}
          {tasks === undefined || tasks.length === 0 ? <h3>Project is empty</h3>
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

export default Project;