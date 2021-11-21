import Button from "../../components/Button/button";
import validation from "../../utils/validation";
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
      validation: validation.checkLogin,
      validationText: "Неверный логин",
    },
    {
      name: "Пароль",
      type: "password",
      inputName: "password",
      id: "password-login",
      validation: validation.checkPass,
      validationText: "Неверный пароль (пока верный только A12345678)",
    },
  ],
  mainError: "",
};

export default data;
