import Input from "../../components/Input/input";
import Button from "../../components/Button/button";
import goToPage from "../../utils/goToPage";

const data = {
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
  buttons: [
    {
      button: new Button({
        id: "login-sign-in",
        buttonText: "Войти",
      }).render(),
    },
    {
      button: new Button({
        className: "_global-style__secondary-button",
        id: "login-sign-up",
        buttonText: "Зарегистрироваться",
        onClickAction: () => goToPage("registration"),
      }).render(),
    },
  ],
};

export default data;
