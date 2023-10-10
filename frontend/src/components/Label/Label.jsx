import styles from './Label.module.css';

const Label = ({ children }) => {
  return (
    <>
      <label className={`${styles.label}`} />
      { children }
    </>
  )
}

export default Label;