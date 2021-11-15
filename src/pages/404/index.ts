import "./notFoundPage.css";
import notFoundTemplate from "./notFoundTemplate";
import Button from "../../components/Button/button";
import Block from "../../modules/block";
import { Page404Props } from "./interfaces";
import router from "../../router";

const buttonId: string = "button-page-500";

const data: Page404Props = {
  title: "404",
  description: "Такой страницы не существует.",

  button: new Button({
    buttonText: "Вернутся к чатам",
    id: buttonId,
  }).render(),
};

export default class Page404 extends Block {
  constructor() {
    super(notFoundTemplate, data);
  }

  componentDidMount() {
    this._element
      .querySelector(`#${buttonId}`)
      ?.addEventListener("click", () => router.go("/messenger"));
  }
}
