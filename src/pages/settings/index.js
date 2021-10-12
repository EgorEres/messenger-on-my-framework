import './settings.css';
import { settingsTemplate } from './settingsTemplate';
import Handlebars from 'handlebars'

const data = {
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
  }],
  passInputs: [{
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
  const settingsPage = Handlebars.compile(settingsTemplate)(data)

  document.body.innerHTML = settingsPage;
})