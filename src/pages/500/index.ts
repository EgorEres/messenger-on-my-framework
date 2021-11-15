import "./serverErrorPage.css";
import serverErrorTemplate from "./serverErrorTemplate";
import Button from "../../components/Button/button";
import Block from "../../modules/block";
import { Page500Props } from "./interfaces";
import router from "../../router";

const buttonId: string = "button-page-500";

const data: Page500Props = {
  title: "500",
  description: "Что-то пошло не так, уже решаем.",

  button: new Button({
    buttonText: "Вернутся к чатам",
    id: buttonId,
  }).render(),
};

export default class Page500 extends Block {
  constructor() {
    super(serverErrorTemplate, data);
  }

  componentDidMount() {
    this._element
      .querySelector(`#${buttonId}`)
      ?.addEventListener("click", () => router.go("/messenger"));
  }
}
