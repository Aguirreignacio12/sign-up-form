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
border: 2px solid  rgba(0,0,0,15%);
color: hsl(249, 10%, 26%) ;


&:focus{
border: 2px solid  hsl(246, 25%, 77%) ;
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