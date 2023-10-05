import styles from './Page.module.css';

const Page = ( { children }) => {
  return (
    <div className={styles['page-container']}>
      {children}
    </div>
  )
};
export default Page;