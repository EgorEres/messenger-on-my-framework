import "styles/registration.css"
import { registrationTemplate } from "./registrationTemplate"
import Block from '../../modules/block.js'
import { render } from "../../utils/renderDOM.js";

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

export default class Registration extends Block {
  constructor(props) {
    super(registrationTemplate, props)
  }

  render() {
    return this.compile(this.props);
  }
}

render("body", new Registration(data));
