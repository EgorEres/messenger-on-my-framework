import Block from "../../modules/block";
import inputTemplate from "./inputTemplate";

export interface InputProps {
  className?: string;
  name: string;
  id?: string;
  inputName: string;
  type: string;
  value?: string;
  validation?: RegExp;
  validationText?: string;
  inputErrorClassName?: string;
  notEmpty?: boolean;
}

const isValid = (value: string, notEmpty: boolean, validation: RegExp, validationText: string) => {
  if (notEmpty && !value) {
    return "Поле не должно быть пустым";
  }

  if (validation && !validation.test(value)) {
    const defaultText = "Заполнено не верно";
    return validationText || defaultText;
  }

  return null;
};

export default class Input extends Block {
  constructor(props: InputProps) {
    super(inputTemplate, props);
  }

  componentDidMount() {
    const input = this._element.querySelector("input") as HTMLInputElement;

    if (input) {
      input.addEventListener("blur", (e: { target }) => {
        const { value } = e.target;
        const validationText = isValid(value, this.props.notEmpty, this.props.validation, this.props.validationText);
        if (validationText) {
          this.setProps({
            error: validationText,
            value,
            inputErrorClassName: "error-validation",
          });
        } else {
          this.setProps({
            error: "",
            value,
            inputErrorClassName: "",
          });
        }
      });
    }
  }
}
