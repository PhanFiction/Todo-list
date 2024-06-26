import styles from './TaskForm.module.css';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Button from '../Button/Button';
import SelectInput from '../SelectInput/SelectInput';
import Card from '../Card/Card';
import {
  useParams,
} from "react-router-dom";

const TaskForm = ({ 
  title, description, priority, project, dueDate, 
  titleChange, descriptionChange, priorityChange, 
  projectChange, dueDateChange, handleSubmit,
  projects, children
}) => {
  
  return(
    <Card>
      <form className={styles["task-form-container"]}>
        <div className={styles["form-input-container"]}>
          { children }
          <div className={styles["task-form-label"]}>
            <Label>
              <Input 
                name="title" 
                value={title}
                text="Title" 
                noBorderOutline={true}
                handleChange={titleChange}
              >
                Title
              </Input>
            </Label>
            <Label>
              <Input 
                name="description" 
                value={description}
                text="Description" 
                noBorderOutline={true}
                handleChange={descriptionChange}
              >
                Description
              </Input>
            </Label>
          </div>
        </div>
        <div className={styles['form-select-container']}>
          <div className={styles["task-form-label"]}>
            <Label>
              <Input 
                type="datetime-local" 
                name="dueDate" 
                value={dueDate}
                handleChange={dueDateChange}
                noBorderOutline={true}
              >
                Due Date
              </Input>
            </Label>
          </div>
          <div className={styles["task-form-select"]}>
            <Label 
              name={priority} 
              text="Priority" 
              noBorderOutline={true}
            >
              Priority
              <SelectInput handleValueChange={priorityChange}>
                <option value="low" label="low">Low</option>
                <option value="medium" label="medium">Medium</option>
                <option value="high" label="high">High</option>
              </SelectInput>
            </Label>
            <Label 
              name={project} 
              text="projects"
              noBorderOutline={true}
            >
              Projects
              <SelectInput handleValueChange={projectChange}>
                {
                  projects?.map(i => 
                    <option value={i._id} label={i.title} key={i._id}>{i.title}</option>
                  )
                }
              </SelectInput>
            </Label>
          </div>
          <Button handleClick={handleSubmit} noBorder={false}>
            Save
          </Button>
        </div>
      </form>
    </Card>
  )
};
export default TaskForm;