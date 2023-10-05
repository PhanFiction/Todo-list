import styles from './CreateProject.module.css';
import Page from '../../components/Page/Page';
import Label from '../../components/Label/Label';
import Input from '../../components/Input/Input';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

const CreateProject = () => {
  return(
    <Page>
      <div className={styles["create-project-page"]}>
        <div className={styles["create-project-container"]}>
          <Card>
            <div className={styles["create-project-form"]}>
              <h1>Create a Project</h1>
              <div className={styles["create-project-item"]}>
                <Label>
                  <Input name={"title"} text="Title" noBorderOutline={true}>
                    Title
                  </Input>
                </Label>
                <div className={styles["create-project-item"]}>
                  <Button noBorder={false}>
                    Add Task
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