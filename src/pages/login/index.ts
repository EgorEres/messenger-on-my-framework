import "./login.css";
import loginTemplate from "./loginTemplate";
import Block from "../../modules/block";
import data from "./loginData";
import { LoginPageProps } from "./interfaces";
import Input from "../../components/Input/input";
import router from "../../router";
import userApi from "../../api/user-api";
import store from "../../store/index";

class Login extends Block {
  constructor() {
    super(loginTemplate, data as LoginPageProps);
  }

  componentWillMount() {
    const withoutGetUserInfo = store.getState("user.withoutGetUserInfo");
    if (withoutGetUserInfo) return;

    userApi.getUser().then((userData) => {
      if (userData) {
        console.info("user already auth");
        store.dispatch({ type: "SET_USER_DATA", payload: userData });
        router.go("/messenger");
      }
    });
  }

  componentDidMount() {
    this._element
      ?.querySelector("#login-sign-up")
      ?.addEventListener("click", () => router.go("/sign-up"));

    const form = this._element?.querySelector("#login-form") as HTMLFormElement;

    // Добавляем инпуты тут, что-бы не прогонять их через handlebars.compile
    this.props.children.forEach((childData) => {
      const input = new Input(childData).getContent();
      form.appendChild(input);
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let error = false;

      const newChildren = this.props.children.map((childData) => {
        const elem = this._element?.querySelector(
          `#${childData.id}`
        ) as HTMLInputElement;
        if (!elem.value) {
          error = true;
          return {
            ...childData,
            error: "Поле не должно быть пустым",
            inputErrorClassName: "_global-style__error-validation",
          };
        }
        return childData;
      });

      if (error) {
        this.setProps({ children: newChildren });
      } else {
        const formData = new FormData(form);
        const authData = {
          login: formData.get("login"),
          password: formData.get("password"),
        };

        // TODO добавить спинер пока ждем ответ
        userApi.postUserSignIn(authData).then((res) => {
          if (res === "OK") {
            router.go("/messenger");
          }
          if (res.errorText) {
            this._element?.querySelector("#mainError")?.innerHTML =
              res.errorText === "Login or password is incorrect"
                ? "Неверный логин или пароль"
                : res.errorText;
          }
        });
      }
    });
  }
}

export default Login;
