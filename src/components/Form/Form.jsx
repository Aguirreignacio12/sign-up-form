import { useForm } from "../../hooks/useForm";
import validationsForm from './validationsForm'
import InputField from "./InputField/InputField";
import Button from "../Button/Button";
import { StyledForm, StyledParagraph, StyledStrong } from "./styles";

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};

const Form = () => {
  const { form, errors, handleChange, handleBlur, handleSubmit } = useForm(initialForm, validationsForm);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputField type='text' name='firstName' value={form.firstName} errors={errors.firstName} placeholder='First Name' onChange={handleChange} onFocus={handleBlur} />
      <InputField type='text' name='lastName' value={form.lastName} errors={errors.lastName} placeholder='Last Name' onChange={handleChange} onBlur={handleBlur} />
      <InputField type='email' name='email' value={form.email} errors={errors.email} placeholder='Email Address' onChange={handleChange} onBlur={handleBlur} />
      <InputField type='password' name='password' value={form.password} errors={errors.password} placeholder='Password' onChange={handleChange} onBlur={handleBlur} />

      <div>
        <Button $form boldText="Claim your free trial" />
      </div>

      <StyledParagraph>By clicking the button, you are agreeing to our <StyledStrong>Terms and Services</StyledStrong></StyledParagraph>
    </StyledForm>
  );
}

export default Form;