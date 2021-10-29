import Block from "../../modules/block";
import inputTemplate from "./inputTemplate";

interface InputProps {
  className?: string;
  name: string;
  id?: string;
  inputName: string;
  type: string;
}

export default class Input extends Block {
  constructor(props: InputProps) {
    super(inputTemplate, props);
  }

  render() {
    return this.compile(this.props);
  }
}
