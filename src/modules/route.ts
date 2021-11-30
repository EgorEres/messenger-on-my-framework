import render from "../utils/renderDOM";

class Route {
  _pathname: string;

  _blockClass;

  _block;

  _props;

  constructor(pathname, view, props) {
    console.log("in constructor route", props);
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname) {
    if (pathname === this._pathname) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
      this._block = null;
    }
  }

  render() {
    if (!this._block) {
      console.log("before render block", this._props);
      this._block = new this._blockClass(this._props);
      render(this._block);
    }
  }
}

export default Route;
