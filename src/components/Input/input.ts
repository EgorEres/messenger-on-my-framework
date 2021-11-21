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
  inputErrorClassName: string;
}

export default class Input extends Block {
  constructor(props: InputProps) {
    super(inputTemplate, props);
  }

  componentDidMount() {
    const input = this._element.querySelector("input") as HTMLInputElement;

    input.addEventListener("blur", (e: { target }) => {
      const { value } = e.target;
      if (!value) {
        this.setProps({
          error: "Поле не должно быть пустым",
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
