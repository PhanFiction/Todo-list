import styles from './Input.module.css';

const Input = ({ name, type="text", value="", text="", noBorderOutline=false, required=false, handleChange=null, children }) => {
  return(
    <>
      {children}
      <input
        className={noBorderOutline ? styles["remove-border-outline"] : styles.input}
        type={type}
        name={name}
        value={value}
        placeholder={text}
        required={required}
        onChange={handleChange}
      />
    </>
  )
};

export default Input;