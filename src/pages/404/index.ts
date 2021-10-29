import "styles/notFoundPage.css";
import notFoundTemplate from "./notFoundTemplate";
import Button from "../../components/Button/button";
import Block from "../../modules/block";
import render from "../../utils/renderDOM";
import goToPage from "../../utils/goToPage";
import { Page404Props } from "./interfaces";

const data: Page404Props = {
  title: "404",
  description: "Такой страницы не существует.",

  button: new Button({
    buttonText: "Вернутся к чатам",
    onClickAction: () => goToPage("chats"),
    id: "page-404",
  }).render(),
};

export default class Page404 extends Block {
  constructor(props: Page404Props) {
    super(notFoundTemplate, props);
  }

  render() {
    return this.compile(this.props);
  }
}

render("body", new Page404(data));
