import "styles/registration.css";
import registrationTemplate from "./registrationTemplate";
import Block from "../../modules/block";
import render from "../../utils/renderDOM";
import data from "./registrationData";

export default class Registration extends Block {
  constructor(props) {
    super(registrationTemplate, props);
  }

  render() {
    return this.compile(this.props);
  }
}

render("body", new Registration(data));
