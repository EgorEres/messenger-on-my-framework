import "./settings.css";
import settingsTemplate from "./settingsTemplate";
import Block from "../../modules/block";
import data from "./settingsData";
import Input from "../../components/Input/input";
import router from "../../router";
import userApi from "../../api/user-api";
import store from "../../store/index";

class Settings extends Block {
  constructor() {
    super(settingsTemplate, data);
  }

  componentDidMount() {
    this._element
      ?.querySelector("#logout-button")
      ?.addEventListener("click", (e) => {
        e.preventDefault();

        userApi.postUserLogout().then(() => {
          store.dispatch({ type: "SET_WITHOUT_GET_USER_INFO", payload: true });
          router.go("/");
        });
      });

    this._element
      ?.querySelector("#settings-closeButton")
      ?.addEventListener("click", () => {
        router.go("/messenger");
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
        // TODO put user/profile with changed field
        // TODO put user/profile/avatar if avatar will changed
        // TODO put use/password if password will changed
        // router.go("/messenger");
      }
    });
  }
}

export default Settings;
