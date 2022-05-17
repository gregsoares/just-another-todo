const Button = ({ text, onClick, type }) => (
  <button className="m-2" type={type} onClick={onClick}>
    {text}
  </button>
);

export default Button;
