const InputField = ({ label, type, name, value, onChange }) => {
  return (
    <label htmlFor={name}>
      {label}
      <input type={type} name={name} placeholder={label} value={value} onChange={onChange} />
    </label>

  );
}


export default InputField;