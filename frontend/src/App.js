import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
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
} from "react-router-dom";
import { useIsAuth } from './hooks/useIsAuth';

function App() {
  const [alert, setAlert] = useState(null);
  const { isAuth } = useIsAuth();
  const closeAlert = () => setAlert(null);
  
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
        <Route exact path="/signup" render={(props) => <SignUp {...props} isAuth={isAuth} setAlert={setAlert} />} />
        <Route exact path="/login" render={(props) => <Login {...props} isAuth={isAuth} setAlert={setAlert} />} />
        <PrivateRoute isAuth={isAuth}>
          <Nav setAlert={setAlert} />
          <Switch>
            <Route exact path="/project/:id" component={Project} />
            <Route exact path="/this-week" render={(props) => <Week setAlert={setAlert}/>} />
            <Route exact path="/task/:id" component={TaskPage} />
            <Route exact path="/create-task" render={(props) => <CreateTask {...props} setAlert={setAlert}/>} />
            <Route exact path="/today" render={(props) => <Today setAlert={setAlert}/>} />
            <Route exact path="/create-project" render={(props) => <CreateProject {...props} setAlert={setAlert} />} />
            <Route exact path="/edit-task/:id" render={(props) => <EditTask sertAlert={setAlert} />} />
            <Route exact path="/" render={(props) => <Home {...props} isAuth={isAuth} setAlert={setAlert}/>} />
          </Switch>
        </PrivateRoute>
      </div>
    </>
  );
}

export default App;
