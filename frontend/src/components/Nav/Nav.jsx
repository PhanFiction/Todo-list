import React, { useState, useEffect } from 'react';
import { faHouse, faCalendarDay, faCalendarWeek, faCirclePlus, faSignOut, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import FaIcon from '../FaIcon/FaIcon';
import LinkRoute from '../LinkRoute/LinkRoute';
import Button from '../Button/Button';
import styles from './Nav.module.css';
import { useHistory } from 'react-router-dom';

const authService = require('../../services/auth');
const projectService = require('../../services/project');

const Nav = ({ setIsAuth, setProjects, projects, setAlert }) => {
  const [toggle, setToggle] = useState(false);
  const history = useHistory();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const res = await authService.logout();
      setIsAuth(false);
      setAlert({'message': res.success});
      history.push(`${res.redirectURL}`)
    } catch(error) {
      setAlert({'message': 'Failed to logout'});
    }
  }

  const handleDelete = async (itemId) => {
    try {
      const res = await projectService.deleteProject(itemId);
      if(res.success) {
        setAlert({'message': res.success});
        const newProjects = projects.filter(item => item._id !== itemId);
        setProjects(newProjects);
      }
    } catch (error) {
      setAlert({error: 'Failed to delete project'});
    }
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
              {projects.map((project, index) => (
                <li className={styles['items']} key={index}>
                  <LinkRoute to={`/project/${project._id}`}>{project.title}</LinkRoute>
                  <Button
                    handleClick={() => handleDelete(project._id)}
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
              <LinkRoute to="/create-project">
                <Button noBorder={false}>
                  Add project
                </Button>
              </LinkRoute>
              <div className={styles['project-container']}>
                {projects.map(project => (
                  <li className={styles['items']} key={project._id}>
                    <LinkRoute to={`project/${project._id}`}>{project.title}</LinkRoute>
                    <Button
                      handleClick={() => handleDelete(project._id)}
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
        ) : (
          <></>
        )}
      </nav>
    </>
  )
};

export default Nav;