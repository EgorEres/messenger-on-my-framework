import "styles/serverErrorPage.css";
import serverErrorTemplate from "./serverErrorTemplate";
import Button from "../../components/Button/button";
import Block from "../../modules/block";
import render from "../../utils/renderDOM";
import goToPage from "../../utils/goToPage";

const data = {
  title: "500",
  description: "Что-то пошло не так, уже решаем.",

  button: new Button({
    buttonText: "Вернутся к чатам",
    id: "page-500",
    onClickAction: () => goToPage("chats"),
  }).render(),
};

export default class Page500 extends Block {
  constructor(props) {
    super(serverErrorTemplate, props);
  }

  render() {
    return this.compile(this.props);
  }
}

render("body", new Page500(data));
