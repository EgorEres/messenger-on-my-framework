import Route from "./route";

class Router {
  routes: Route[];

  defaultRoute: Route | null;

  history: History;

  _currentRoute: Route | null;

  static __instance;

  constructor() {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.defaultRoute = null;
    this.history = window.history;
    this._currentRoute = null;

    Router.__instance = this;
  }

  use(pathname, block) {
    const route = new Route(pathname, block);

    this.routes.push(route);

    return this;
  }

  default(block) {
    const route = new Route("*", block);

    this.defaultRoute = route;

    return this;
  }

  start() {
    window.onpopstate = (event) => {
      this._onRoute(event.currentTarget.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }

  go(pathname) {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname) {
    const findRoute = this.routes.find((route) => route._pathname === pathname);
    return findRoute || this.defaultRoute;
  }
}

export default Router;
