type Listeners = Record<string, Function[]>;

class EventBus {
  listeners: Listeners;

  constructor() {
    this.listeners = {};
  }

  on(event: string, cb: Function) {
    if (!this.listeners[event]) {
      this.listeners[event] = [cb];
    } else {
      this.listeners[event].push(cb);
    }
  }

  emit(event: string, ...args: any) {
    if (!this.listeners[event]) {
      throw new Error(`Have not event by name: ${event}`);
    } else {
      this.listeners[event].forEach((listener) => {
        listener(...args);
      });
    }
  }

  off(event: string, cb: Function) {
    if (!this.listeners[event]) {
      throw new Error(`Have not event by name: ${event}`);
    } else {
      this.listeners[event] = this.listeners[event].filter(
        (listener) => listener !== cb
      );
    }
  }
}

export default EventBus;
