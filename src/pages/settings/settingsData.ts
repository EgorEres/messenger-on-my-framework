import validation from "../../utils/validation";
import store from "../../store/index";

const userData = store.getState("user");

const data = {
  avatar: {
    url: userData.avatar,
    errorLoad: "",
    isSuccessLoad: false,
  },
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
      name: "Старый пароль",
      type: "password",
      inputName: "oldPassword",
      id: "input-password",
    },
    {
      name: "Новый пароль",
      type: "password",
      inputName: "newPassword",
      id: "input-re-password",
    },
  ],
};

export default data;
