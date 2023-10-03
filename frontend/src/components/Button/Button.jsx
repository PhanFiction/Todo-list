import './Button.css';

const Button = ({ children, noBorder=true }) => {
  return(
    <button className={`btn ${noBorder === true ? 'noBorderAndOutline' : ''}`}>
      { children }
    </button>
  );
}
export default Button;