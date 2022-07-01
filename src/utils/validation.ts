const checkEmail = /^\S+@\S+$/;
// const checkPhone = /^((8|\+7)[- ]?)?((?\d{3})?[- ]?)?[\d\- ]{7,10}$/;
const checkPhone = /\+7 ([0-9]{3}) [0-9]{3}-[0-9]{2}-[0-9]{2}/;

export default {
  checkEmail,
  checkPhone,
};
