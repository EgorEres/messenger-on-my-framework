import "styles/login.css";
import loginTemplate from "./loginTemplate";
import Block from "../../modules/block";
import render from "../../utils/renderDOM";
import data from "./loginData";
import goToPage from "../../utils/goToPage";
import validation from "../../utils/validation";
import { LoginPageProps } from "./interfaces";

export default class Login extends Block {
  constructor(props: LoginPageProps) {
    super(loginTemplate, props);
  }

  componentDidMount() {
    this._element
      ?.querySelector("#login-sign-up")
      ?.addEventListener("click", () => goToPage("registration"));

    const form = this._element?.querySelector("#login-form") as HTMLFormElement;
    const errorElem = this._element?.querySelector(
      "#_login__error"
    ) as HTMLElement;

    const loginInput = this._element?.querySelector(
      "#input-login"
    ) as HTMLInputElement;
    const passwordInput = this._element?.querySelector(
      "#input-password"
    ) as HTMLInputElement;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (
        !validation.checkLogin.test(loginInput?.value) ||
        !validation.checkPass.test(passwordInput.value)
      ) {
        loginInput.classList.add("_global-style__error-validation");
        passwordInput.classList.add("_global-style__error-validation");
        errorElem.innerHTML = "Неверный логин или пароль (пароль пока 1234)";
      } else {
        goToPage("chats");
      }
    });

    form.addEventListener(
      "focus",
      () => {
        errorElem.innerHTML = "";
        loginInput.classList.remove("_global-style__error-validation");
        passwordInput.classList.remove("_global-style__error-validation");
      },
      true
    );

    form.addEventListener(
      "blur",
      () => {
        if (
          !validation.checkLogin.test(loginInput?.value) ||
          !validation.checkPass.test(passwordInput.value)
        ) {
          loginInput.classList.add("_global-style__error-validation");
          passwordInput.classList.add("_global-style__error-validation");
          errorElem.innerHTML = "Неверный логин или пароль (пароль пока 1234)";
        }
      },
      true
    );
  }
}

render(new Login(data));
