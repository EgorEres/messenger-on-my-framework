import "styles/serverErrorPage.css";
import { serverErrorTemplate } from './serverErrorTemplate';
import Button from "../../components/Button/button.js";
import Block from '../../modules/block.js';
import { render } from "../../utils/renderDOM.js";
const data = {
    title: '500',
    description: 'Что-то пошло не так, уже решаем.',
    button: new Button({
        className: 'my-class',
        buttonText: 'Вернутся к чатам',
        url: './chats.html'
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
