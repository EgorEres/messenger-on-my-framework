import "styles/login.css";
import { loginTemplate } from "./loginTemplate";

export const data = {
  inputs: [
    {
      name: "Логин",
      type: "text",
      inputName: "login",
    },
    {
      name: "Пароль",
      type: "password",
      inputName: "password",
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = loginTemplate;
});
