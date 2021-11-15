import Route from "./route";

class Router {
  routes;

  defaultRoute;

  history;

  _currentRoute;

  _rootQuery;

  static __instance;

  constructor(rootQuery) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.defaultRoute = null;
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname, block) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });

    this.routes.push(route);

    return this;
  }

  default(block) {
    const route = new Route("*", block, { rootQuery: this._rootQuery });

    this.defaultRoute = route;

    return this;
  }

  start() {
    window.onpopstate = (event) => {
      console.log("it is event");
      this._onRoute(event.currentTarget.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname) {
    const route = this.getRoute(pathname);
    console.log(route);
    if (!route) {
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render(route, pathname);
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
