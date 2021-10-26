import 'styles/settings.css';
import { settingsTemplate } from './settingsTemplate';
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

export default class Settings extends Block {
  constructor(props) {
    super(settingsTemplate, props)
  }

  render() {
    return this.compile(this.props);
  }
}

render("body", new Settings(data));
