import "styles/chats.css";
import chatsTemplate from "./chatsTemplate";
import Block from "../../modules/block.js";
import render from "../../utils/renderDOM.js";
import { PageChatsProps } from "./interfaces";

const data: PageChatsProps = {
  urlToSettings: "./settings.html",
  chats: [{ name: "Foo" }, { name: "Bar" }, { name: "Baz" }],
  emptyText: "Что-бы начать общаться выберите контакт или группу",
};

render(new Block(chatsTemplate, data));
