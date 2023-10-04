import './Button.css';

const Button = ({ children, noBorder=true, handleClick}) => {
  return(
    <button onClick={handleClick} className={`btn ${noBorder === true ? 'noBorderAndOutline' : ''}`}>
      { children }
    </button>
  );
}
export default Button;