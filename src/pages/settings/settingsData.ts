import Input from "../../components/Input/input";
import Button from "../../components/Button/button";
// import goToPage from "../../utils/goToPage";

const data = {
  inputs: [
    {
      input: new Input({
        name: "Имя",
        type: "text",
        inputName: "first_name",
      }).render(),
    },
    {
      input: new Input({
        name: "Фамилия",
        type: "text",
        inputName: "second_name",
      }).render(),
    },
    {
      input: new Input({
        name: "Логин",
        type: "text",
        inputName: "login",
      }).render(),
    },
    {
      input: new Input({
        name: "Почта",
        type: "text",
        inputName: "email",
      }).render(),
    },
    {
      input: new Input({
        name: "Телефон",
        type: "text",
        inputName: "phone",
      }).render(),
    },
    {
      passInput: new Input({
        name: "Повторите пароль",
        type: "password",
        inputName: "password",
      }).render(),
    },
    {
      passInput: new Input({
        name: "Пароль",
        type: "password",
        inputName: "repeat_password",
      }).render(),
    },
  ],
  buttons: [
    {
      button: new Button({
        className: "_global-style__secondary-button",
        id: "save-settings-button",
        buttonText: "Сохранить",
      }).render(),
    },
    {
      button: new Button({
        id: "logout-button",
        buttonText: "Выйти",
        // onClickAction: () => goToPage("login"),
      }).render(),
    },
  ],
};

export default data;
