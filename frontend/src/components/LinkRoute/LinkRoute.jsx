import styles from './LinkRoute.module.css';
import {
  Link, useLocation,
} from "react-router-dom";

const LinkRoute = ({ to, children }) => {

  const { pathname } = useLocation();

  function isActiveRoute(to, currentPath) {
    return currentPath === to;
  }

  return (
    <Link className={`${styles.link} ${isActiveRoute(to, pathname) ? styles.active : ''}`} to={to}>
      {children}
    </Link>
  )
}

export default LinkRoute;