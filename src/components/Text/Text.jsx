import './text.css';

const Text = (props) => {
  const { type, size, children, style } = props;
  return <div style={style} className={`text ${type} ${size}`}>{children}</div>
}

export default Text;