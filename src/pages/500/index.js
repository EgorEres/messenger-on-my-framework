import "./serverErrorPage.css"
import { serverErrorTemplate } from './serverErrorTemplate'
import Handlebars from 'handlebars'

const data = {
  title: '500',
  description: 'Что-то пошло не так, уже решаем.',
  buttonText: "Вернутся к чатам",
  url: "./chats.html",
}

document.addEventListener('DOMContentLoaded', () => {
  const page500 = Handlebars.compile(serverErrorTemplate)(data);

  document.body.innerHTML = page500;
})