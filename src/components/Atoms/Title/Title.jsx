const Title = ({ text, isActive }) => (
  <label
    className={`text-xl text-black font-semibold ${
      isActive ? "line-through" : ""
    }`}
  >
    {text}
  </label>
);

export default Title;
