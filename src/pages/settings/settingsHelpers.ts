import Input from "../../components/Input/input";

export const renderInputs = (element, inputs, passwordInputs) => {
  const form = element?.querySelector("#settings-form") as HTMLFormElement;
  const passForm = element?.querySelector("#changePass-form") as HTMLFormElement;

  inputs.forEach((childData) => {
    const input = new Input(childData).getContent();
    form.appendChild(input);
  });

  passwordInputs.forEach((childData) => {
    const input = new Input(childData).getContent();
    passForm.appendChild(input);
  });
};

export const setModalActions = (element, inputs, setProps) => {
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
    let error = true;

    const updatedInputs = inputs.map((input) => {
      const elem = element?.querySelector(`#${input.id}`) as HTMLInputElement;
      if (!elem.value) {
        error = true;
        return {
          ...input,
          error: "Поле не должно быть пустым",
          inputErrorClassName: "_global-style__error-validation",
        };
      }
      return input;
    });

    if (error) {
      setProps({ passwordInputs: updatedInputs, showModal: true });
    } else {
      const formData = new FormData(form);
      const oldPassword = formData.get("oldPassword");
      const newPassword = formData.get("newPassword");
      console.log("go to /update pass", oldPassword, newPassword);
    }
    // if (oldPassword && newPassword) {
    // that need change pass
    // TODO put user/password if password will changed
    // add some this.setProps form this 2 field
    // 1) не должны быть пустые
    // 2) ответ при отправке
    // }
  });
};
