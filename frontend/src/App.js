import './App.css';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Today from './pages/Today/Today';
import Week from './pages/Week/Week';
import Task from './pages/Task/Task';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CreateTask from './pages/CreateTask/CreateTask';

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
            <Route exact path="/today" component={Today} />
            <Route exact path="/week" component={Week} />
            <Route exact path="/task/:id" component={Task}/>
            <Route exact path="/create-task" component={CreateTask}/> 
            <Route exact path="/" component={Home} />
          </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
