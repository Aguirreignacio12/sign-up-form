import styled from "styled-components";

const StyledInput = styled.input`
width:100%;
font-size:1rem;
outline:none;
font-weight:600;
padding:1em 1.2em;
position:relative;
background-color: #fff;
border-radius:.60em;
border: 2px solid rgba(0,0,0,0.15);
color: hsl(249, 10%, 26%) ;
caret-color: hsl(246, 25%, 77%);


&:focus {
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 2px; /* Ajusta el grosor según tus necesidades */
      height: 1em;
      background-color: red; /* Cambia el color según tus preferencias */
      z-index: 1;
    }
  }


`

const InputField = ({ type, name, placeholder, value, onChange }) => {
  return (
    <div>
      <StyledInput type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}


export default InputField;