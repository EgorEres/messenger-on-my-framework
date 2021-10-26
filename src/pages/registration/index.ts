import "styles/registration.css"
import { registrationTemplate } from "./registrationTemplate"

export const data = {
  inputs: [{
    name: "Имя",
    type: "text",
    inputName: "first_name",
  }, {
    name: "Фамилия",
    type: "text",
    inputName: "second_name",
  }, {
    name: "Логин",
    type: "text",
    inputName: "login",
  }, {
    name: "Почта",
    type: "text",
    inputName: "email",
  }, {
    name: "Телефон",
    type: "text",
    inputName: "phone",
  }, {
    name: "Пароль",
    type: "password",
    inputName: "password",
  }, {
    name: "Повторите пароль",
    type: "password",
    inputName: "repeat-password",
  }]
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = registrationTemplate;
})