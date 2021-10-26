export class EventBus {
    constructor() {
        this.listeners = {};
    }
    on(event, cb) {
        if (!this.listeners[event]) {
            this.listeners[event] = [cb];
        }
        else {
            this.listeners[event].push(cb);
        }
    }
    emit(event, ...args) {
        if (!this.listeners[event]) {
            throw new Error(`Have not event by name: ${event}`);
        }
        else {
            this.listeners[event].forEach(listener => {
                listener(...args);
            });
        }
    }
    off(event, cb) {
        if (!this.listeners[event]) {
            throw new Error(`Have not event by name: ${event}`);
        }
        else {
            this.listeners[event] = this.listeners[event].filter(listener => listener !== cb);
        }
    }
}
