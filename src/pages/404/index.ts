import "styles/notFoundPage.css";
import { notFoundTemplate } from './notFoundTemplate'
import Button from "../../components/Button/button.js";
import Block from '../../modules/block.js'
import { render } from "../../utils/renderDOM.js";

const data = {
  title: '404',
  description: 'Такой страницы не существует.',

  button: new Button({
    className: 'my-class',
    buttonText: 'Вернутся к чатам',
    url: './chats.html'
  }).render(),
}


export default class Page404 extends Block {
  constructor(props) {
    super(notFoundTemplate, props)
  }

  render() {
    return this.compile(this.props);
  }
}

render("body", new Page404(data));
