import Block from "../../modules/block.js";
import buttonTemplate from "./buttonTemplate.js";

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
