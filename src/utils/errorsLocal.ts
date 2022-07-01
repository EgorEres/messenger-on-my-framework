const errorsOptions = {
  "Login already exists": {
    text: "Такой логин уже существует",
    fieldType: "login",
  },
  "Email already exists": {
    text: "Эта почта уже используется",
    fieldType: "email",
  },
  "phone is not valid": {
    text: "Проверьте правильность номера телефона",
    fieldType: "phone",
  },
  "email is not valid": {
    text: "Невалидный email, пример: mail@gmail.com",
    fieldType: "email",
  },
};

const errorsLocal = (errorText) => errorsOptions[errorText] || { text: errorText, fieldType: "main" };

export default errorsLocal;
