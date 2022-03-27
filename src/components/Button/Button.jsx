import PropTypes from 'prop-types';
import './button.css';

const Button = (props) => {
  const { type, size, disabled, onClick, children } = props;
  return <button onClick={onClick} className={`button ${type} ${size}`} disabled={disabled}>{children}</button>
}


Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger'])
}

export default Button;
