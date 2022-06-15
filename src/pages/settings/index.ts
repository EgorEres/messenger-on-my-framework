import "./settings.css";
import settingsTemplate from "./settingsTemplate";
import Block from "../../modules/block";
import data from "./settingsData";
import router from "../../router";
import userApi from "../../api/user-api";
import changePassHelper from "./helpers/changePassHelper";
import renderInputs from "./helpers/rendersHelper";
import changeAvatarHelper from "./helpers/changeAvatarHelper";
import changeUserDataHelper from "./helpers/changeUserDataHelper";

class Settings extends Block {
  constructor(state) {
    super(settingsTemplate, data, state);
  }

  componentDidMount() {
    const { passwordInputs, avatar, inputs } = this.props;
    renderInputs(this._element, inputs, passwordInputs);

    changePassHelper(this._element, passwordInputs, this.setProps);
    changeAvatarHelper(this._element, this.setProps, avatar);
    changeUserDataHelper(this._element, inputs, this.setProps);

    this._element?.querySelector("#logout-button")?.addEventListener("click", (e) => {
      e.preventDefault();
      userApi.postUserLogout().then(() => {
        router.go("/");
      });
    });

    this._element?.querySelector("#settings-closeButton")?.addEventListener("click", () => {
      router.go("/messenger");
    });
  }
}

export default Settings;
