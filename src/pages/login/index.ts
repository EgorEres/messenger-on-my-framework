import "./login.css";
import loginTemplate from "./loginTemplate";
import Block from "../../modules/block";
import render from "../../utils/renderDOM";
import data from "./loginData";
import goToPage from "../../utils/goToPage";
import { LoginPageProps } from "./interfaces";
import Input from "../../components/Input/input";

export default class Login extends Block {
  constructor(props: LoginPageProps) {
    super(loginTemplate, props);
  }

  componentDidMount() {
    this._element
      ?.querySelector("#login-sign-up")
      ?.addEventListener("click", () => goToPage("registration"));

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
        if (!childData.validation.test(elem.value)) {
          error = true;
          return {
            ...childData,
            error: elem.value
              ? childData.validationText
              : "Поле не должно быть пустым",
            inputErrorClassName: "_global-style__error-validation",
          };
        }
        return childData;
      });

      if (error) {
        this.setProps({ children: newChildren });
      } else {
        goToPage("chats");
      }
    });
  }
}

render(new Login(data));
