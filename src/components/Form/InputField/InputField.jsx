import { StyledContainer, StyledInput, StyledErrorMessage } from "./styles";

const InputField = ({ type, id, name, placeholder, value, onChange, onBlur, errors }) => {
  return (
    <StyledContainer>
      <StyledInput type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} />
      {errors && <StyledErrorMessage>{errors}</StyledErrorMessage>}
    </StyledContainer>
  );
}


export default InputField;