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

import {
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Header />
      <div className="page-layout">
        <Nav />
          <Switch>
            <Route path="/projects" component={Projects} />
            <Route exact path="/week" component={Week} />
            <Route exact path="/task/:id" component={TaskPage}/>
            <Route exact path="/create-task" component={CreateTask}/>
            <Route path="/today" component={Today} />
            <Route exact path="/create-project" component={CreateProject}/>
            <Route exact path="/" component={Home} />
          </Switch>
      </div>
    </>
  );
}

export default App;
