import styles from './SelectInput.module.css';

const SelectInput = ({ handleValueChange=null }) => {
  return(
  <select onChange={handleValueChange} className={styles.select}>
    <option value="option1" label="Option 1">Option 1 Label</option>
    <option value="option2" label="Option 2">Option 2 Label</option>
    <option value="option3" label="Option 3">Option 3 Label</option>
  </select>
  )
};

export default SelectInput;