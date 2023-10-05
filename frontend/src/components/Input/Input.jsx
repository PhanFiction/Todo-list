import styles from './Input.module.css';

const Input = ({ name, type="text", text="", noBorderOutline=false, children }) => {
  return(
    <>
      {children}
      <input
        className={noBorderOutline ? styles["remove-border-outline"] : styles.input}
        type={type}
        name={name}
        placeholder={text}
      />
    </>
  )
};

export default Input;