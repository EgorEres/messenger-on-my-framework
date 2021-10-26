import 'styles/chats.css';
import { chatsTemplate } from './chatsTemplate';

export const data = {
  urlToSettings: "./settings.html",
  chats: [
    {name: "Foo"}, {name: "Bar"}, {name: "Baz"}
  ],
  emptyText: "Что-бы начать общаться выберите контакт или группу"
}

document.addEventListener('DOMContentLoaded', () => {

  document.body.innerHTML = chatsTemplate;
})