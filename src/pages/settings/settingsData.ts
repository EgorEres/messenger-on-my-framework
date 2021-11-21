import validation from "../../utils/validation";
import store from "../../store/index";

const userData = store.getState("user");

const data = {
  children: [
    {
      name: "Имя",
      type: "text",
      inputName: "first_name",
      id: "input-first_name",
      value: userData.first_name,
    },
    {
      name: "Фамилия",
      type: "text",
      inputName: "second_name",
      id: "input-second_name",
      value: userData.second_name,
    },
    {
      name: "Логин",
      type: "text",
      inputName: "login",
      id: "input-login",
      value: userData.login,
    },
    {
      name: "Почта",
      type: "text",
      inputName: "email",
      id: "input-email",
      validation: validation.checkEmail,
      validationText: "Невалидный email, пример: mail@gmail.com",
      value: userData.email,
    },
    {
      name: "Телефон",
      type: "text",
      inputName: "phone",
      id: "input-phone",
      validation: validation.checkPhone,
      validationText: "Проверьте правильность номера телефона",
      value: userData.phone,
    },
    {
      name: "Пароль",
      type: "password",
      inputName: "password",
      id: "input-password",
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
