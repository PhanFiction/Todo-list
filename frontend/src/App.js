import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Today from './pages/Today/Today';
import Week from './pages/Week/Week';
import TaskPage from './pages/TaskPage/TaskPage';
import Header from './components/Header/Header';
import CreateTask from './pages/CreateTask/CreateTask';
import CreateProject from './pages/CreateProject/CreateProject';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import EditTask from './pages/EditTask/EditTask';
import Alert from './components/Alert/Alert';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

//import * as projectService from './services/project';

const projectService = require('./services/project');
const cookie = require('js-cookie');

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [userInfo, setUserInfo] = useState('');
  const [alert, setAlert] = useState(null);
  const history = useHistory();
  const [projects, setProjects] = useState([]);

  const closeAlert = () => {
    setAlert(null);
  };

  const fetchProjects = async () => {
    const req = await projectService.getAllProjects();
    setProjects(req.data);
  };

  useEffect(() => {
    const userAuthCookie = cookie.get('authToken');
    if (userAuthCookie) {
      setIsAuth(true);
      setUserInfo(userAuthCookie);;
    }

    projectService.getAllProjects().then(data => setProjects(data.data));
    console.log(projects);
  }, []);

  return (
    <>
      <Header />
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={closeAlert}
        />
      )}
      <div className="page-layout">
          <>
            <Route exact path="/signup" render={(props) => <SignUp {...props} isAuth={isAuth} setAlert={setAlert} />} />
            <Route exact path="/login" render={(props) => <Login {...props} setAuth={setIsAuth} isAuth={isAuth} setAlert={setAlert} />} />
            <PrivateRoute isAuth={isAuth}>
              <Nav setIsAuth={setIsAuth} setProjects={setProjects} projects={projects} setAlert={setAlert} />
              <Switch>
                <Route path="/projects" component={Projects} />
                <Route exact path="/week" component={Week} />
                <Route exact path="/task/:id" component={TaskPage} />
                <Route exact path="/create-task" component={CreateTask} />
                <Route path="/today" component={Today} />
                <Route exact path="/create-project" render={(props) => <CreateProject {...props} setAlert={setAlert} setProjects={setProjects}/>} />
                <Route exact path="/edit-task/:id" component={EditTask} />
                <Route exact path="/" render={(props) => <Home {...props} isAuth={isAuth} />} />
              </Switch>
            </PrivateRoute>
          </>
      </div>
{/*       <div className="page-layout">
        {isAuth ? (
          <>
            <Nav setIsAuth={setIsAuth} />
            <Switch>
              <Route path="/projects" component={Projects} />
              <Route exact path="/week" component={Week} />
              <Route exact path="/task/:id" component={TaskPage} />
              <Route exact path="/create-task" component={CreateTask} />
              <Route path="/today" component={Today} />
              <Route exact path="/create-project" render={(props) => <CreateProject {...props} setAlert={setAlert} />} />
              <Route exact path="/edit-task/:id" component={EditTask} />
              <Route exact path="/" render={(props) => <Home {...props} isAuth={isAuth} />} />
            </Switch>
          </>
        ) : (
          <>
            <Route exact path="/signup" render={(props) => <SignUp {...props} isAuth={isAuth} setAlert={setAlert} />} />
            <Route exact path="/login" render={(props) => <Login {...props} isAuth={isAuth} setAlert={setAlert} />} />
            <Redirect exact from="/" to="/login" />
          </>
        )}
      </div> */}
    </>
  );
}

export default App;
