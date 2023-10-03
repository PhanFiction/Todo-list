import './Home.css';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import FaIcon from '../../components/FaIcon/FaIcon';

const Home = () => {
  return(
    <section className="home-section">
      <div className="todo-container">
        <label>
          <input type="checkbox" />
          Cook dinner
        </label>
        <div className="task-items">
          <button>Details</button>
          <FaIcon iconName={faPenToSquare} size="sm"/>
          <FaIcon iconName={faTrashCan} size="sm"/>
        </div>
      </div>
    </section>
  )
};

export default Home;