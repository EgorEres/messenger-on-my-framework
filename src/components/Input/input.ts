import Block from "../../modules/block";
import inputTemplate from "./inputTemplate";

export default class Input extends Block {
  constructor(props) {
    super(inputTemplate, props);
  }

  render() {
    return this.compile(this.props);
  }
}
