import { useState } from "react";

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
  }


  return (
    <form onSubmit={handleSubmit}>
      <InputField label='First Name' place type='text' name='firstName' value={formData.firstName} onChange={handleInputChange} />
      <InputField label='Last Name' type='text' name='lastName' value={formData.lastName} onChange={handleInputChange} />
      <InputField label='Email Address' type='email' name='email' value={formData.email} onChange={handleInputChange} />
      <InputField label='Password' type='password' name='password' value={formData.password} onChange={handleInputChange} />
      <div>
        <Button form normalText="Claim your free trial" />
      </div>

      <p>By clicking the button, you are agreeing to our Terms and Services</p>
    </form>
  );
}

export default Form;