import styles from './CheckBox.module.css';

const CheckBox = ({ completed, handleCompleted, children }) => {
  return (
    <label
      className={`${styles['checkbox-label']} ${completed ? styles.completed : styles['not-completed']}`}
    >
      <input type="checkbox" onChange={handleCompleted} />
      {children}
    </label>
  )
}

export default CheckBox;