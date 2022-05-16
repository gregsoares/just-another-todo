const Label = ({ text, name }) => (
  <label for={name} className="text-slate-500 font-medium text-medium">
    {text}
  </label>
);

export default Label;
