import "./serverErrorPage.css";
import serverErrorTemplate from "./serverErrorTemplate";
import Button from "../../components/Button/button";
import Block from "../../modules/block";
import render from "../../utils/renderDOM";
import goToPage from "../../utils/goToPage";
import { Page500Props } from "./interfaces";

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
  constructor(props: Page500Props) {
    super(serverErrorTemplate, props);
  }

  componentDidMount() {
    this._element
      .querySelector(`#${buttonId}`)
      ?.addEventListener("click", () => goToPage("chats"));
  }
}

render(new Page500(data));
