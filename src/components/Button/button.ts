import Block from "../../modules/block.js";
import buttonTemplate from "./buttonTemplate.js";

interface ButtonProps {
  className?: string;
  buttonText: string;
  id: string;
  onClickAction?: null | Function;
}

export default class Button extends Block {
  constructor(props: ButtonProps) {
    super(buttonTemplate, props);
  }

  componentDidMount() {
    if (this.props.onClickAction) {
      return document.addEventListener("DOMContentLoaded", () => {
        const elem = document.getElementById(this.props.id);
        return elem && elem.addEventListener("click", this.props.onClickAction);
      });
    }
    return null;
  }

  render() {
    return this.compile(this.props);
  }
}
