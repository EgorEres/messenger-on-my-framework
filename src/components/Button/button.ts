import Block from "../../modules/block";
import buttonTemplate from "./buttonTemplate";

interface ButtonProps {
  className?: string;
  buttonText: string;
  id: string;
  type?: string;
  form?: string;
}

export default class Button extends Block {
  constructor(props: ButtonProps) {
    super(buttonTemplate, props);
  }
}
