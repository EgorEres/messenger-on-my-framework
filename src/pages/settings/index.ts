import "./settings.css";
import settingsTemplate from "./settingsTemplate";
import Block from "../../modules/block";
import data from "./settingsData";
import Input from "../../components/Input/input";
import router from "../../router";
import userApi from "../../api/user-api";
import store from "../../store/index";
import settingsApi from "../../api/settings-api";

const fieldNames = ["first_name", "second_name", "login", "email", "phone"];

const getChangedFields = (formData) => {
  const profile = {};
  fieldNames.forEach((name) => {
    const value = formData.get(name);
    profile[name] = value;
  });
  return profile;
};

class Settings extends Block {
  constructor(state) {
    super(settingsTemplate, data, state);
  }

  componentWillMount() {
    console.log("check state in on will mount:", this.state);
    const userData = store.getState("user");
    this.setProps({
      avatar: {
        ...this.props.avatar,
        url: userData.avatar,
      },
    });
  }

  componentDidMount() {
    console.log("check state in on did mount:", this.state.user, this.props);

    this._element?.querySelector("#logout-button")?.addEventListener("click", (e) => {
      e.preventDefault();

      userApi.postUserLogout().then(() => {
        store.dispatch({ type: "SET_WITHOUT_GET_USER_INFO", payload: true });
        router.go("/");
      });
    });

    this._element?.querySelector("#settings-closeButton")?.addEventListener("click", () => {
      router.go("/messenger");
    });

    const avatarForm = this._element?.querySelector("#avatar-input-from") as HTMLFormElement;
    this._element?.querySelector("#avatar-input")?.addEventListener("change", (e) => {
      const [file] = e.target.files;
      if (!file.type.includes("image")) {
        this.setProps({
          avatar: {
            ...this.props.avatar,
            errorLoad: "Неверный формат аватарки, должно быть изображение",
          },
        });
      } else {
        const avatarFormData = new FormData(avatarForm);
        settingsApi.updateAvatar(avatarFormData).then((res) => {
          // console.log("res in component", res);

          this.setProps({
            avatar: {
              url: res.avatar,
              errorLoad: res.errorText || "",
              isSuccessLoad: !!res.avatar,
            },
          });
        });
        // put to server
      }
    });

    const form = this._element?.querySelector("#settings-form") as HTMLFormElement;

    // Добавляем инпуты тут, что-бы не прогонять их через handlebars.compile
    this.props.children.forEach((childData) => {
      // console.log(childData);
      const input = new Input(childData).getContent();
      form.appendChild(input);
    });

    // TODO move avatar input here

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let error = true;

      const newChildren = this.props.children.map((childData) => {
        const elem = this._element?.querySelector(`#${childData.id}`) as HTMLInputElement;
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

      if (!error) {
        this.setProps({ children: newChildren });
      } else {
        const formData = new FormData(form);

        // check if change avatar
        const avatar = formData.get("avatar");
        if (avatar && avatar?.size) {
          // get just files type image
          if (avatar?.type.includes("image")) {
            console.log("it is image");
            // TODO put user/profile/avatar if avatar will changed
          } else {
            console.log("it is not image");
            // TODO error that it is not image
          }
        }

        const profile = getChangedFields(formData);
        console.log(profile);
        // TODO put user/profile with changed field

        const oldPassword = formData.get("oldPassword");
        const newPassword = formData.get("newPassword");

        if (oldPassword && newPassword) {
          // that need change pass
          // TODO put user/password if password will changed
        }
      }
    });
  }
}

export default Settings;
