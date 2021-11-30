import Block from "../../modules/block";
import inputTemplate from "./inputTemplate";

interface InputProps {
  className?: string;
  name: string;
  id?: string;
  inputName: string;
  type: string;
  value?: string;
  validation?: string;
  validationText?: string;
  inputErrorClassName?: string;
  notEmpty?: string;
}

const isValid = (value, notEmpty, validation, validationText) => {
  const defaultText = "Заполнено не верно";
  if (notEmpty && !value) return "Поле не должно быть пустым";

  if (validation) return validation.test(value) ? null : validationText || defaultText;

  return null;
};

export default class Input extends Block {
  constructor(props: InputProps) {
    super(inputTemplate, props);
  }

  componentDidMount() {
    const input = this._element.querySelector("input") as HTMLInputElement;

    input.addEventListener("blur", (e: { target }) => {
      const { value } = e.target;
      const validationText = isValid(value, this.props.notEmpty, this.props.validation, this.props.validationText);
      if (validationText) {
        this.setProps({
          error: validationText,
          value,
          inputErrorClassName: "_global-style__error-validation",
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
