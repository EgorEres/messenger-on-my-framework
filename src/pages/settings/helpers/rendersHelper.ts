import Input from "../../../components/Input/input";

const renderInputs = (element, inputs, passwordInputs) => {
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

export default renderInputs;
