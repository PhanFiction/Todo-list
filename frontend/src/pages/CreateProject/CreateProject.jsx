import React, { useState } from 'react';
import styles from './CreateProject.module.css';
import Page from '../../components/Page/Page';
import Label from '../../components/Label/Label';
import Input from '../../components/Input/Input';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

const projectService = require('../../services/project');

const CreateProject = ({ setAlert }) => {
  const [title, setTitle] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    const newProject = { title };
    try {
      const res = await projectService.createProject(newProject);
      setAlert({'message': res.success});

    } catch (error) {
      console.log(error);
      setAlert({'message': 'failed to create project'});
    }
  }

  return(
    <Page>
      <div className={styles["create-project-page"]}>
        <div className={styles["create-project-container"]}>
          <Card>
            <div className={styles["create-project-form"]}>
              <h1>Create a Project</h1>
              <div className={styles["create-project-item"]}>
                <Label>
                  <Input value={title} handleChange={handleTitleChange} name={"title"} text="Title" noBorderOutline={true}>
                    Title
                  </Input>
                </Label>
                <div className={styles["create-project-item"]}>
                  <Button handleClick={handleProjectSubmit} noBorder={false}>
                    Save Project
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Page>
  )
};

export default CreateProject;