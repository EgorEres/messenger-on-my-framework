import "./notFoundPage.css"
import { notFoundTemplate } from './notFoundTemplate'
import Handlebars from 'handlebars'

const data = {
  title: '404',
  description: 'Такой страницы не существует.',
  buttonText: "Вернутся к чатам",
  url: "./chats.html",
}

document.addEventListener('DOMContentLoaded', () => {
  const page404 = Handlebars.compile(notFoundTemplate)(data);

  document.body.innerHTML = page404;
})