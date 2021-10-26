import "styles/login.css";
import { loginTemplate } from "./loginTemplate";
import Block from '../../modules/block.js'
import { render } from "../../utils/renderDOM.js";
import Input from "../../components/Input/input.js";

export const data = {
  inputs: [
    {
      input: new Input({
        name: "Логин",
        type: "text",
        inputName: "login",
      }).render()
    },
    {
      input: new Input({
        name: "Пароль",
        type: "password",
        inputName: "password",
      }).render()
    },
  ]
};

export default class Login extends Block {
  constructor(props) {
    super(loginTemplate, props)
  }

  render() {
    return this.compile(this.props);
  }
}

render("body", new Login(data));
