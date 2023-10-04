import './Task.css';
import CheckBox from '../CheckBox/CheckBox';
import FaIcon from '../FaIcon/FaIcon';
import Button from '../Button/Button';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import LinkRoute from '../LinkRoute/LinkRoute';

const Task = ({ completed, taskId, setTaskData, taskData, children }) => {
  const [complete, isComplete] = useState(completed);

  const toggleComplete = (taskId) => {
    isComplete(!complete);
  };

  const handleDelete = (taskId) => {
    const deletedTask = taskData.filter(item => item.id !== taskId);
    setTaskData(deletedTask);
  };

  return(
    <div className="task-container">
      <CheckBox handleCompleted={()=>{toggleComplete(taskId)}} completed={complete} >
        { children }
      </CheckBox>
      <div className="task-items">
        <LinkRoute to={`/task/${taskId}`}>
          <Button noBorder={false}>
            Details
          </Button>
        </LinkRoute>
        <FaIcon iconName={faPenToSquare} size="sm"/>
        <Button handleClick={()=>{handleDelete(taskId)}}>
          <FaIcon iconName={faTrashCan} size="sm" onClick={handleDelete}/>
        </Button>
      </div>
    </div>
  )
};

export default Task;