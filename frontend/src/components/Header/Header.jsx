import styles from './Header.module.css';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import FaIcon from '../FaIcon/FaIcon';

const Header = () => {
  return( 
    <header>
      <div className={styles.header}>
        <FaIcon iconName={faListCheck} size={'lg'}/>
        <h1>Todo List</h1>
      </div>
    </header>
  )
}
export default Header;