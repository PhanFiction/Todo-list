import './CheckBox.css';

const CheckBox = ({ completed, handleCompleted, children }) => {
  return (
    <label className={completed === true ? 'label completed' : 'label not-completed'}>
      <input type="checkbox" onChange={handleCompleted}/>
      { children }
    </label>
  )
}

export default CheckBox;