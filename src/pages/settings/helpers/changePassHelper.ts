import settingsApi from "../../../api/settings-api";

const changePassHelper = (element, inputs, setProps) => {
  element.querySelector("#changePass-button")?.addEventListener("click", () => {
    setProps({ showModal: true });
  });

  element.querySelector("#closeModal-button")?.addEventListener("click", (e) => {
    e.preventDefault();
    setProps({ showModal: false });
  });

  const form = element.querySelector("#changePass-form") as HTMLFormElement;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let error = false;

    const updatedInputs = inputs.map((input) => {
      const elem = element?.querySelector(`#${input.id}`) as HTMLInputElement;
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

    if (error) {
      setProps({ passwordInputs: updatedInputs, showModal: true });
    } else {
      const formData = new FormData(form);
      const oldPassword: string = formData.get("oldPassword") as string;
      const newPassword: string = formData.get("newPassword") as string;

      settingsApi.updatePassword({ oldPassword, newPassword }).then((res) => {
        if (res === "OK") {
          setProps({ showModal: false });
        } else {
          setProps({ errorText: res.errorText });
        }
      });
    }
  });
};

export default changePassHelper;
