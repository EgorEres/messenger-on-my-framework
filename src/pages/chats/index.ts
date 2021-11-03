import "./chats.css";
import chatsTemplate from "./chatsTemplate";
import Block from "../../modules/block";
import render from "../../utils/renderDOM";
import { PageChatsProps } from "./interfaces";

const data: PageChatsProps = {
  urlToSettings: "./settings.html",
  chats: [{ name: "Foo" }, { name: "Bar" }, { name: "Baz" }],
  emptyText: "Что-бы начать общаться выберите контакт или группу",
};

render(new Block(chatsTemplate, data));
