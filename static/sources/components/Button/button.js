import Block from '../../modules/block.js';
import { buttonTemplate } from './buttonTemplate.js';
export default class Button extends Block {
    constructor(props) {
        super(buttonTemplate, props);
    }
    render() {
        console.log('check !!this 22:', this.props);
        return this.compile(this.props);
    }
}
