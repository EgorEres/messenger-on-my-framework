import Button from "../../components/Button/button";
import validation from "../../utils/validation";

const data = {
  button: new Button({
    id: "login-sign-in",
    buttonText: "Войти",
    className: "_global-style__secondary-button",
  }).render(),
  mainError: "",
  children: [
    {
      name: "Имя",
      type: "text",
      inputName: "first_name",
      id: "input-first_name",
      notEmpty: true,
    },
    {
      name: "Фамилия",
      type: "text",
      inputName: "second_name",
      id: "input-second_name",
      notEmpty: true,
    },
    {
      name: "Логин",
      type: "text",
      inputName: "login",
      id: "input-login",
      notEmpty: true,
    },

    {
      name: "Почта",
      type: "text",
      inputName: "email",
      id: "input-email",
      // validation: validation.checkEmail,
      // validationText: "Невалидный email, пример: mail@gmail.com",
      notEmpty: true,
    },
    {
      name: "Телефон",
      type: "text",
      inputName: "phone",
      id: "input-phone",
      // validation: validation.checkPhone,
      // validationText: "Проверьте правильность номера телефона",
      notEmpty: true,
    },
    {
      name: "Пароль",
      type: "password",
      inputName: "password",
      id: "input-password",
      notEmpty: true,
    },
    {
      name: "Повторите пароль",
      type: "password",
      inputName: "re-password",
      id: "input-re-password",
    },
  ],
};

export default data;
