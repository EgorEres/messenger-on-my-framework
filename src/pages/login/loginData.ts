import Button from "../../components/Button/button";
import { LoginPageProps } from "./interfaces";

const data: LoginPageProps = {
  button: new Button({
    className: "_global-style__secondary-button",
    id: "login-sign-up",
    buttonText: "Зарегистрироваться",
  }).render(),
  loginButtonText: "Войти",
  children: [
    {
      name: "Логин",
      type: "text",
      inputName: "login",
      id: "input-login",
      notEmpty: true,
    },
    {
      name: "Пароль",
      type: "password",
      inputName: "password",
      id: "password-login",
      notEmpty: true,
    },
  ],
  mainError: "",
};

export default data;
