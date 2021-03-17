const validateEmail = email => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(email) === false) {
    return [false, 'Email inválido.'];
  } else {
    return [true, 'Sem erros'];
  }
};

export default validateEmail;
