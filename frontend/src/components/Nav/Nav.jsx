import React, { useState, useEffect } from 'react';
import { faHouse, faCalendarDay, faCalendarWeek, faCirclePlus, faSignOut, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import FaIcon from '../FaIcon/FaIcon';
import LinkRoute from '../LinkRoute/LinkRoute';
import Button from '../Button/Button';
import styles from './Nav.module.css';
import { useHistory } from 'react-router-dom';
const authService = require('../../services/auth');
const projectService = require('../../services/project');

const Nav = ({ setIsAuth }) => {
  const [toggle, setToggle] = useState(false);
  const [projects, setProjects] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const req = await projectService.getAllProjects();
        console.log(req);
        // Do something with the result if needed
        setProjects(req.data);
      } catch (error) {
        // Handle any errors here
        console.error(error);
      }
    };
    fetchProjects();
  }, [])

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const res = await authService.logout();
      setIsAuth(false);
      history.push(`${res.redirectURL}`)
    } catch(error) {
      console.log(error);
    }
  }

  const handleDelete = async (itemId) => {
    console.log(itemId);
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
            <li onClick={handleLogout}>
              <FaIcon iconName={faSignOut} size="sm"/>
              Logout
            </li>
          </ul>
          <ul>
            <h1>Projects</h1>
            <LinkRoute to="/create-project">
              <Button noBorder={false}>
                Add project
              </Button>
            </LinkRoute>
            <div className={styles['project-container']}>
              {projects.map(item => (
                <li className={styles['items']} key={item._id}>
                  <LinkRoute to={item._id}>{item.title}</LinkRoute>
                  <Button
                    handleClick={() => handleDelete(item._id)}
                  >
                    <FaIcon iconName={faTrashCan} size="sm" />
                  </Button>
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
              <li onClick={handleLogout}>
                <FaIcon iconName={faSignOut} size="sm"/>
                Logout
              </li>
            </ul>
            <ul>
              <h1>Projects</h1>
              <div className={styles['project-container']}>
                {projects.map(item => (
                  <li className={styles['items']} key={item._id}>
                    <LinkRoute to={item._id}>{item.title}</LinkRoute>
                    <Button handleClick={() => handleDelete(item._id)}>
                      <FaIcon iconName={faTrashCan} size="sm" onClick={handleDelete} />
                    </Button>
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