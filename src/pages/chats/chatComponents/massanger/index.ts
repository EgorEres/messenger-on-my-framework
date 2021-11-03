import Block from "../../../../modules/block";
import messengerTemplate from "./messengerTemplate";

export default class Messenger extends Block {
  constructor(props) {
    super(messengerTemplate, props);
  }

  componentDidMount() {
    console.log("props in messenger", this.props);
  }
}
