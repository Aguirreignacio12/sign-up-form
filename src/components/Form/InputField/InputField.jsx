import StyledInput from "./styles";

const InputField = ({ type, name, placeholder, value, onChange }) => {
  return (
    <div>
      <StyledInput type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}


export default InputField;