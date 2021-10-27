import "styles/chats.css";
import chatsTemplate from "./chatsTemplate";
import Block from "../../modules/block.js";
import render from "../../utils/renderDOM.js";

const data = {
  urlToSettings: "./settings.html",
  chats: [{ name: "Foo" }, { name: "Bar" }, { name: "Baz" }],
  emptyText: "Что-бы начать общаться выберите контакт или группу",
};

export default class Chats extends Block {
  constructor(props) {
    super(chatsTemplate, props);
  }

  render() {
    return this.compile(this.props);
  }
}

render("body", new Chats(data));
