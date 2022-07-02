import settingsApi from "../../../api/settings-api";

const fieldNames = ["first_name", "second_name", "login", "email", "phone"];

const getChangedFields = (formData) => {
  const profile: {
    display_name?: string;
    first_name?: string;
    second_name?: string;
  } = {};
  fieldNames.forEach((name) => {
    const value = formData.get(name);
    profile[name] = value;
  });
  return profile;
};

const changeUserDataHelper = (element, inputs, setProps) => {
  const form = element.querySelector("#settings-form") as HTMLFormElement;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let error = true;

    const updatedInputs = inputs.map((input) => {
      const elem = element.querySelector(`#${input.id}`) as HTMLInputElement;
      if (!elem.value) {
        error = true;
        return {
          ...input,
          error: "Поле не должно быть пустым",
          inputErrorClassName: "error-validation",
        };
      }
      return input;
    });

    if (!error) {
      setProps({ children: updatedInputs });
    } else {
      const formData = new FormData(form);

      const profile = getChangedFields(formData);
      profile.display_name = `${profile.first_name || ""} ${profile.second_name || ""}`;

      settingsApi.updateProfile(profile).then((res) => {
        localStorage.setItem("user", JSON.stringify(res));
      });
    }
  });
};

export default changeUserDataHelper;
