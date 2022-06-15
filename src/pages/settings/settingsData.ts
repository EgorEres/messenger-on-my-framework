import validation from "../../utils/validation";

const user = localStorage.getItem("user") || "";
const userParse = JSON.parse(user);

const data = {
  avatar: {
    url: userParse.avatar || "",
    errorLoad: "",
    isSuccessLoad: false,
  },
  inputs: [
    {
      name: "Имя",
      type: "text",
      inputName: "first_name",
      id: "input-first_name",
      value: userParse.first_name || "",
    },
    {
      name: "Фамилия",
      type: "text",
      inputName: "second_name",
      id: "input-second_name",
      value: userParse.second_name || "",
    },
    {
      name: "Логин",
      type: "text",
      inputName: "login",
      id: "input-login",
      value: userParse.login || "",
    },
    {
      name: "Почта",
      type: "text",
      inputName: "email",
      id: "input-email",
      validation: validation.checkEmail,
      validationText: "Невалидный email, пример: mail@gmail.com",
      value: userParse.email || "",
    },
    {
      name: "Телефон",
      type: "text",
      inputName: "phone",
      id: "input-phone",
      validation: validation.checkPhone,
      validationText: "Проверьте правильность номера телефона",
      value: userParse.phone || "",
    },
  ],
  passwordInputs: [
    {
      name: "Старый пароль",
      type: "password",
      inputName: "oldPassword",
      id: "input-password",
      notEmpty: true,
    },
    {
      name: "Новый пароль",
      type: "password",
      inputName: "newPassword",
      id: "input-re-password",
      notEmpty: true,
    },
  ],
  showModal: false,
};

export default data;
