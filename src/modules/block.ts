import EventBus from "./eventBus";

declare const Handlebars;

export interface CbEventsInterface {
  name: string;
  callback: EventListener;
}

export default class Block {
  static EVENTS = {
    FLOW_CWM: "flow:component-will-mount",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render",
    FLOW_CDU: "flow:component-did-update",
  };

  _element: HTMLElement;

  _meta: {
    template: string;
    props: Record<string, any>;
  };

  _children: HTMLElement[];

  props: any;

  eventBus: () => EventBus;

  constructor(template: string, props = {}) {
    const eventBus = new EventBus();
    this.eventBus = () => eventBus;

    this._meta = { template, props };
    this._element = document.createElement("div");
    this.props = this._makePropsProxy(props);

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.FLOW_CWM);
  }

  _registerEvents(eventBus) {
    eventBus.on(Block.EVENTS.FLOW_CWM, this._componentWillMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  setProps = (nextProps: { [key: string]: any }) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  compile(props: object): string {
    const page = Handlebars.compile(this._meta.template)(props);
    return page;
  }

  _render() {
    const html = this.render();
    const dom = this._htmlToDocumentFragment(html);
    this._element.append(dom);

    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  render() {
    return this.compile(this.props);
  }

  _htmlToDocumentFragment(html) {
    const template = document.createElement("template");
    const trimHtml = html.trim();
    template.innerHTML = trimHtml;
    return template.content;
  }

  getContent(): HTMLElement {
    return this._element;
  }

  _makePropsProxy(props) {
    return new Proxy(props, {
      set: (target, prop, value) => {
        target[prop as keyof typeof target] = value;

        this.eventBus().emit(Block.EVENTS.FLOW_CDU, this.props, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      },
    });
  }

  _componentWillMount() {
    this.componentWillMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  componentWillMount() {}

  _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {}

  _componentDidUpdate(oldProps, newProps) {
    const response = this.shouldComponentUpdate(oldProps, newProps);

    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  shouldComponentUpdate(oldProps, newProps) {
    return oldProps !== newProps;
  }
}
