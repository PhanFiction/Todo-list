import './LinkRoute.css';
import {
  Link, useLocation,
} from "react-router-dom";

const LinkRoute = ({ to, children }) => {

  const { pathname } = useLocation();

  function isActiveRoute(to, currentPath) {
    return currentPath === to;
  }

  return (
    <Link className={isActiveRoute(`${to}`, pathname) ? 'link active' : 'link'} to={to}>
      { children }
    </Link>
  )
}

export default LinkRoute;