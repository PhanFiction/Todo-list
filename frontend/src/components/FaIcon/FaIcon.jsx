import styles from './FaIcon.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FaIcon = ( { children, iconName='iconName', size='sm' }) => {
  return( 
    <>
    <FontAwesomeIcon icon={iconName} className={styles[`fa-size-${size}`]}/>
    { children }
    </>
  )
}
export default FaIcon;