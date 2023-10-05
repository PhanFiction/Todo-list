import styles from './CreateTask.module.css';
import Card from '../../components/Card/Card';
import Label from '../../components/Label/Label';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Page from '../../components/Page/Page';
import SelectInput from '../../components/SelectInput/SelectInput';

const CreateTask = () => {
  return(
    <Page>
      <div className={styles["create-task-page"]}>
        <div className={styles["create-task-container"]}>
          <Card>
            <div className={styles["create-task-form-container"]}>
              <div className={styles["create-task-items"]}>
                <div className={styles["create-task-label"]}>
                  <Label>
                    <Input name={"title"} text="Title" noBorderOutline={true}>
                      Title
                    </Input>
                  </Label>
                </div>
                <div className={styles["create-task-label"]}>
                  <Label>
                    <Input name={"description"} text="Description" noBorderOutline={true}>
                      Description
                    </Input>
                  </Label>
                </div>
              </div>
              <div className={styles["create-task-items"]}>
                <div className={styles["create-task-label"]}>
                  <Label>
                    <Input name={"description"} text="description" type={"datetime-local"} noBorderOutline={true}>
                      Due Date
                    </Input>
                  </Label>
                </div>
                <div className={styles["create-task-select"]}>
                  <Label name={"priority"} text="Priority" noBorderOutline={true}>
                    Priority
                    <SelectInput />
                  </Label>
                  <Label name={"projects"} text="projects" noBorderOutline={true}>
                    Projects
                    <SelectInput />
                  </Label>
                </div>
                <Button noBorder={false}>
                  Add Task
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Page>
  )
};

export default CreateTask;