import Block from "../../modules/block.js";
import buttonTemplate from "./buttonTemplate.js";

interface ButtonProps {
  className?: string;
  buttonText: string;
  id: string;
  onClickAction?: Function;
}

export default class Button extends Block {
  constructor(props: ButtonProps) {
    super(buttonTemplate, props);
  }

  componentDidMount() {
    if (this.props.onClickAction) {
      const elem = document.getElementById(this.props.id);
      elem?.addEventListener("click", this.props.onClickAction);
    }
  }

  render() {
    return this.compile(this.props);
  }
}
