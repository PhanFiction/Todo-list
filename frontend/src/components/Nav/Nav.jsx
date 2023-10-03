import { faHouse, faCalendarDay, faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import FaIcon from '../FaIcon/FaIcon';
import LinkRoute from '../LinkRoute/LinkRoute';
import './Nav.css';
import { useState } from 'react';

const links = [
  {

  }
]

const projects = [
  {
    name: 'Project 1',
    to: '/task/1',
    id: 1,
  },
  {
    name: 'Project 1',
    to: '/task/2',
    id: 2,
  },
]

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const addProject = () => {
    return null;
  }

  const toggleMenu = () => {
    setToggle(!toggle);
  }

  return(
    <>
      <nav className="desktop">
        <aside>
          <ul>
            <li>
              <LinkRoute to='/'>
                <FaIcon iconName={faHouse} size="sm"/>
                  Home
              </LinkRoute>
            </li>
            <li>
              <LinkRoute to='/today'>
                <FaIcon iconName={faCalendarDay} size="sm"/>
                Today
              </LinkRoute>
            </li>
            <li>
              <LinkRoute to='/this-week'>
                <FaIcon iconName={faCalendarWeek} size="sm"/>
                This week
              </LinkRoute>
            </li>
          </ul>
          <ul className="project-list">
            <h1>Projects</h1>
            {
              projects.map((item, index) =>
              <li key={item.id}>
                <LinkRoute to={item.to}>
                  {item.name}
                </LinkRoute>
              </li>
              )
            }
            <button onClick={addProject}>
              <LinkRoute to="/create-task">
                Add Task
              </LinkRoute>
            </button>
          </ul>
        </aside>
      </nav>
      <nav className="mobile">
        <div className="hamburger" onClick={toggleMenu}>
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </div>
          {
            toggle === true ? 
          <aside className={toggle === true ? 'nav' : 'hide-nav'}>
            <ul>
              <li>
                <LinkRoute to='/'>
                  <FaIcon iconName={faHouse} size="sm"/>
                    Home
                </LinkRoute>
              </li>
              <li>
                <LinkRoute to='/today'>
                  <FaIcon iconName={faCalendarDay} size="sm"/>
                  Today
                </LinkRoute>
              </li>
              <li>
                <LinkRoute to='/this-week'>
                  <FaIcon iconName={faCalendarWeek} size="sm"/>
                  This week
                </LinkRoute>
              </li>
            </ul>
            <ul className="project-list">
              <h1>Projects</h1>
              {
                projects.map((item, index) =>
                <li key={item.id}>
                  <LinkRoute to={item.to}>
                    {item.name}
                  </LinkRoute>
                </li>
                )
              }
              <button onClick={addProject}>
                <LinkRoute to="/create-task">
                  Add Task
                </LinkRoute>
              </button>
            </ul>
          </aside>
            : <></>
          }
      </nav>
    </>
  )
};

export default Nav;