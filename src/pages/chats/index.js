import './chats.css';
import { chatsTemplate } from './chatsTemplate';
import Handlebars from 'handlebars'

const data = {
  urlToSettings: "./settings.html",
  chats: [
    {name: "Foo"}, {name: "Bar"}, {name: "Baz"}
  ],
  emptyText: "Что-бы начать общаться выберите контакт или группу"
}

document.addEventListener('DOMContentLoaded', () => {
  const pageChats = Handlebars.compile(chatsTemplate)(data);

  document.body.innerHTML = pageChats;
})