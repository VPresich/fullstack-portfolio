const validateEmail = email => {
  console.log(email);
  return /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,7}$/.test(email);
};

export default validateEmail;
