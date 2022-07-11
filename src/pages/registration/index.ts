import "./registration.css";
import registrationTemplate from "./registrationTemplate";
import Block from "../../modules/block";
import data from "./registrationData";
import Input from "../../components/Input/input";
import router from "../../router";
import userApi from "../../api/user-api";
import errorsLocal from "../../utils/errorsLocal";

class Registration extends Block {
  constructor() {
    super(registrationTemplate, data);
  }

  componentDidMount() {
    this._element?.querySelector("#login-sign-in")?.addEventListener("click", () => router.go("/"));

    const form = this._element?.querySelector("#registration-form") as HTMLFormElement;

    // Добавляем инпуты тут, что-бы не прогонять их через handlebars.compile
    this.props.children.forEach((childData) => {
      const input = new Input(childData).getContent();
      form.appendChild(input);
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let error = false;

      const newChildren = this.props.children.map((childData) => {
        const elem = this._element?.querySelector(`#${childData.id}`) as HTMLInputElement;
        if (!elem.value) {
          error = true;
          return {
            ...childData,
            error: "Поле не должно быть пустым",
            inputErrorClassName: "error-validation",
          };
        }
        return childData;
      });

      if (error) {
        this.setProps({ children: newChildren });
      } else {
        const formData = new FormData(form);
        const registrationData = {
          first_name: formData.get("first_name"),
          second_name: formData.get("second_name"),
          login: formData.get("login"),
          email: formData.get("email"),
          password: formData.get("password"),
          phone: formData.get("phone"),
        };

        userApi.postUserSignUp(registrationData).then((res) => {
          if (res.id) {
            userApi.getUser().then((userData) => {
              if (userData) {
                localStorage.setItem("user", JSON.stringify(userData));
                router.go("/messenger");
              }
            });
            return;
          }
          if (res.errorText) {
            const { text, fieldType } = errorsLocal(res.errorText);
            if (fieldType === "main") {
              this.setProps({ mainError: text });
              return;
            }
            const updateChildren = this.props.children.map((childData) => {
              if (childData.inputName === fieldType) {
                return {
                  ...childData,
                  error: text,
                  inputErrorClassName: "error-validation",
                };
              }
              return childData;
            });

            this.setProps({ children: updateChildren });
          }
        });
      }
    });
  }
}

export default Registration;
