import { useState } from "react";
import styled from "styled-components";
import InputField from "./InputField/InputField";
import Button from "../Button/Button";

const StyledForm = styled.form`
  background-color : #fff;
  border-radius:.60em;
  display:flex;
  flex-direction:column;
  padding: 1em 1.2em;
  gap:1em;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 15%);

@media screen and (min-width:768px){
  padding:3em 2.5em;
  gap:1.5em;
}
`
const StyledParagraph = styled.p`
color:hsl(246, 25%, 77%);
font-size:.7rem;
text-align:center;
line-height:1.9em;
padding:0 1.05em;
`

const StyledStrong = styled.strong`
color: hsl(0, 100%, 74%);
`

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log('Objeto:');
    console.log(formData);

    console.log('propiedades por separado:');
    console.log(formData.firstName);
    console.log(formData.lastName);
    console.log(formData.email);
    console.log(formData.password);


    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
  }



  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputField placeholder='First Name' type='text' name='firstName' value={formData.firstName} onChange={handleInputChange} />
      <InputField placeholder='Last Name' type='text' name='lastName' value={formData.lastName} onChange={handleInputChange} />
      <InputField placeholder='Email Address' type='email' name='email' value={formData.email} onChange={handleInputChange} />
      <InputField placeholder='Password' type='password' name='password' value={formData.password} onChange={handleInputChange} />
      <div>
        <Button $form boldText="Claim your free trial" />
      </div>

      <StyledParagraph>By clicking the button, you are agreeing to our <StyledStrong>Terms and Services</StyledStrong></StyledParagraph>
    </StyledForm>
  );
}

export default Form;