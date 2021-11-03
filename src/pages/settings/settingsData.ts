import Button from "../../components/Button/button";
import validation from "../../utils/validation";

const data = {
  children: [
    {
      name: "Имя",
      type: "text",
      inputName: "first_name",
      id: "input-first_name",
      validation: validation.checkText,
      validationText: "Неподходящее имя",
    },
    {
      name: "Фамилия",
      type: "text",
      inputName: "second_name",
      id: "input-second_name",
      validation: validation.checkText,
      validationText: "Неподходящая фамилия",
    },
    {
      name: "Логин",
      type: "text",
      inputName: "login",
      id: "input-login",
      validation: validation.checkLogin,
      validationText: "Неподходящий логин",
    },

    {
      name: "Почта",
      type: "text",
      inputName: "email",
      id: "input-email",
      validation: validation.checkEmail,
      validationText: "Невалидный email, пример: mail@gmail.com",
    },
    {
      name: "Телефон",
      type: "text",
      inputName: "phone",
      id: "input-phone",
      validation: validation.checkPhone,
      validationText: "Проверьте правильность номера телефона",
    },
    {
      name: "Пароль",
      type: "password",
      inputName: "password",
      id: "input-password",
      validation: validation.checkPass,
      validationText: "Неверный пароль (пока верный только A12345678)",
    },
    {
      name: "Повторите пароль",
      type: "password",
      inputName: "re-password",
      id: "input-re-password",
      validation: validation.checkPass,
      validationText: "Неверный пароль (пока верный только A12345678) имя",
    },
  ],
  button: new Button({
    className: "_global-style__secondary-button",
    id: "logout-button",
    buttonText: "Выйти",
  }).render(),
  submitButtonText: "Сохранить",
};

export default data;
