import Block from '../../modules/block.js'
import { inputTemplate } from './inputTemplate.js'

export default class Input extends Block {
  constructor(props) {
    super(inputTemplate, props)
  }

  render() {
    return this.compile(this.props);
  }
}