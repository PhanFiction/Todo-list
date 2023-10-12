import styles from './SelectInput.module.css';

const SelectInput = ({ handleValueChange=null, children }) => {
  return(
  <select onChange={handleValueChange} className={styles.select}>
    { children }
  </select>
  )
};

export default SelectInput;