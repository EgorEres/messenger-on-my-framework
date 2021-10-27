import "styles/notFoundPage.css";
import notFoundTemplate from "./notFoundTemplate";
import Button from "../../components/Button/button";
import Block from "../../modules/block";
import render from "../../utils/renderDOM";
import goToPage from "../../utils/goToPage";

const data = {
  title: "404",
  description: "Такой страницы не существует.",

  button: new Button({
    buttonText: "Вернутся к чатам",
    onClickAction: () => goToPage("chats"),
    id: "page-404",
  }).render(),
};

export default class Page404 extends Block {
  constructor(props) {
    super(notFoundTemplate, props);
  }

  render() {
    return this.compile(this.props);
  }
}

render("body", new Page404(data));
