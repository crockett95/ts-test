class Eventable {
  callbacks = {};
  subscribe(event : string, callback : () => any) : void {
    if (!this.haveEvent(event)) {
      this.callbacks[event] = new Array<() => any>();
    }

    this.callbacks[event].push(callback);
  }

  fire(event : string) {
    if (this.haveEvent(event)) {
      var callbacks : Array<() => any> = this.callbacks[event];

      for (var i = 0, max = callbacks.length; i < max; i++) {
        callbacks[i].call(this);
      }
    }
  }

  haveEvent(event : string) : boolean {
    return typeof this.callbacks[event] === 'undefined';
  }
}
export = Eventable;
