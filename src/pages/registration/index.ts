import "styles/registration.css";
import registrationTemplate from "./registrationTemplate";
import Block from "../../modules/block";
import render from "../../utils/renderDOM";
import data from "./registrationData";
import goToPage from "../../utils/goToPage";
import validation from "../../utils/validation";

const testByName = {
  first_name: validation.checkText,
  second_name: validation.checkText,
  login: validation.checkLogin,
  email: validation.checkEmail,
  phone: validation.checkPhone,
  password: validation.checkPass,
  repeat_password: validation.checkPass,
};

export default class Registration extends Block {
  constructor(props) {
    super(registrationTemplate, props);
  }

  private checkValid(name: string, value: string) {
    return testByName[name].test(value);
  }

  render() {
    return this.compile(this.props);
  }

  componentDidMount() {
    const inputsCollection =
      this._element.querySelectorAll<HTMLInputElement>("input");
    const errorElem = this._element.querySelector(
      "#_registration__error"
    ) as HTMLElement;

    this._element
      ?.querySelector("#login-sign-in")
      ?.addEventListener("click", () => goToPage("login"));

    inputsCollection.forEach((input) => {
      input.addEventListener("focus", () => {
        input.classList.remove(
          "_global-style__error-validation",
          "_global-style__success-validation"
        );
      });
      input.addEventListener("blur", () => {
        const { name, value } = input;
        const addClass = this.checkValid(name, value)
          ? "_global-style__success-validation"
          : "_global-style__error-validation";
        input.classList.add(addClass);
      });
    });

    const regButton = this._element.querySelector("#login-sign-up");
    regButton?.addEventListener("click", () => {
      const errorInputsList: string[] = [];
      inputsCollection.forEach((input) => {
        const isValid = this.checkValid(input.name, input.value);
        const addClass = isValid
          ? "_global-style__success-validation"
          : "_global-style__error-validation";
        input.classList.add(addClass);

        if (!isValid) errorInputsList.push(input.name);
      });

      if (errorInputsList.length) {
        errorElem.innerHTML = `Валидация не пройдена у полей ${errorInputsList.join(
          " "
        )}`;
      } else {
        goToPage("chats");
      }
    });
  }
}

render(new Registration(data));
