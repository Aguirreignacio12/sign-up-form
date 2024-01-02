const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.firstName.trim()) {
    errors.firstName = 'First Name cannot be empty';
  } else if (!regexName.test(form.firstName.trim())) {
    errors.firstName = 'El campo solo acepta letras y espacios en blanco';
  }

  if (!form.lastName.trim()) {
    errors.lastName = 'Last Name cannot be empty';
  }

  if (!form.email.trim()) {
    errors.email = 'Email cannot be empty';
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = 'El campo email es incorrecto';
  }

  if (!form.password.trim()) {
    errors.password = 'Password cannot be empty';
  }

  return errors;
};

export default validationsForm;