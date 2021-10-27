import "styles/settings.css";
import settingsTemplate from "./settingsTemplate";
import Block from "../../modules/block";
import render from "../../utils/renderDOM";
import data from "./settingsData";

export default class Settings extends Block {
  constructor(props) {
    super(settingsTemplate, props);
  }

  render() {
    return this.compile(this.props);
  }
}

render("body", new Settings(data));
