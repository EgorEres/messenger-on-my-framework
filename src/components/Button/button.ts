import Block from '../../modules/block.js'
import { buttonTemplate } from './buttonTemplate.js'

export default class Button extends Block {
  constructor(props) {
    super(buttonTemplate, props)
  }

  render() {
    return this.compile(this.props);
  }
}