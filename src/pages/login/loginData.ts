import Input from "../../components/Input/input";
import Button from "../../components/Button/button";
import { LoginPageProps } from "./interfaces";

const data: LoginPageProps = {
  inputs: [
    {
      input: new Input({
        name: "Логин",
        type: "text",
        inputName: "login",
        id: "input-login",
      }).render(),
    },
    {
      input: new Input({
        name: "Пароль",
        type: "password",
        inputName: "password",
        id: "input-password",
      }).render(),
    },
  ],
  button: new Button({
    className: "_global-style__secondary-button",
    id: "login-sign-up",
    buttonText: "Зарегистрироваться",
  }).render(),
  loginButtonText: "Войти",
};

export default data;
