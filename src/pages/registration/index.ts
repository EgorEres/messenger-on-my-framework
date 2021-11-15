import "./registration.css";
import registrationTemplate from "./registrationTemplate";
import Block from "../../modules/block";
import data from "./registrationData";
import Input from "../../components/Input/input";
import router from "../../router";

class Registration extends Block {
  constructor() {
    super(registrationTemplate, data);
  }

  componentDidMount() {
    this._element
      ?.querySelector("#login-sign-in")
      ?.addEventListener("click", () => router.go("/"));

    const form = this._element?.querySelector(
      "#registration-form"
    ) as HTMLFormElement;

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
        router.go("/messenger");
      }
    });
  }
}

export default Registration;
