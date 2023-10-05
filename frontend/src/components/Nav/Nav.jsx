import { faHouse, faCalendarDay, faCalendarWeek, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import FaIcon from '../FaIcon/FaIcon';
import LinkRoute from '../LinkRoute/LinkRoute';
import Button from '../Button/Button';
import styles from './Nav.module.css';
import { useState } from 'react';

const projects = [
  {
    name: 'Project 1',
    to: '/task/1',
    id: 1,
  },
  {
    name: 'Project 2',
    to: '/task/2',
    id: 2,
  },
  {
    name: 'Project 3',
    to: '/task/3',
    id: 3,
  },
  {
    name: 'Project 4',
    to: '/task/4',
    id: 4,
  },
  {
    name: 'Project 5',
    to: '/task/5',
    id: 5,
  },
  {
    name: 'Project 6',
    to: '/task/6',
    id: 6,
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
      <nav className={styles.desktop}>
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
          <ul>
            <h1>Projects</h1>
            <LinkRoute to="/create-project">
              <button className={styles.button}>Add Task</button>
            </LinkRoute>
            <div className={styles['project-container']}>
              {projects.map((item, index) => (
                <li key={item.id}>
                  <LinkRoute to={item.to}>{item.name}</LinkRoute>
                </li>
              ))}
            </div>
          </ul>
          <div className={styles['btn-container']}>
            <LinkRoute to="/create-task">
              <Button>
                <FaIcon iconName={faCirclePlus} size="xl"/>
              </Button>
            </LinkRoute>
          </div>
        </aside>
      </nav>
      <nav className={styles.mobile}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.burger}></div>
          <div className={styles.burger}></div>
          <div className={styles.burger}></div>
        </div>
        {toggle === true ? (
          <aside className={toggle === true ? styles.nav : styles['hide-nav']}>
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
            <ul>
              <h1>Projects</h1>
              <div className={styles['project-container']}>
                {projects.map((item, index) => (
                  <li key={item.id}>
                    <LinkRoute to={item.to}>{item.name}</LinkRoute>
                  </li>
                ))}
              </div>
              <div className={styles['btn-container']}>
                <LinkRoute to="/create-task">
                  <Button>
                    <FaIcon iconName={faCirclePlus} size="xl"/>
                  </Button>
                </LinkRoute>
              </div>
            </ul>
          </aside>
        ) : (
          <></>
        )}
      </nav>
    </>
  )
};

export default Nav;