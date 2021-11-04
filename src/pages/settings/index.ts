import "./settings.css";
import settingsTemplate from "./settingsTemplate";
import Block from "../../modules/block";
import render from "../../utils/renderDOM";
import data from "./settingsData";
import goToPage from "../../utils/goToPage";
import Input from "../../components/Input/input";

export default class Settings extends Block {
  constructor(props) {
    super(settingsTemplate, props);
  }

  componentDidMount() {
    this._element
      ?.querySelector("#logout-button")
      ?.addEventListener("click", (e) => {
        e.preventDefault();
        goToPage("login");
      });

    const form = this._element?.querySelector(
      "#settings-form"
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
        goToPage("chats");
      }
    });
  }
}

render(new Settings(data));
