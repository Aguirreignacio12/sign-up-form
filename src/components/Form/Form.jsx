import { useState } from "react";
import { StyledForm, StyledParagraph, StyledStrong } from "./styles";
import InputField from "./InputField/InputField";
import Button from "../Button/Button";


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