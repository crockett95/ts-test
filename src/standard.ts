import Timer = require('./timer');
import Eventable = require('./mixins/eventable');
import applyMixins = require('./support/mixins');
import StandardTimerOptions = require('./options/standard');

'use strict';
class StandardTimer implements Timer, Eventable {
  private timeCap : number;
  private countdown : number;
  private elapsedTime : number = 0;
  private lastChecked : Date;
  callbacks = {};

  subscribe : (event : string, callback : () => any) => void;
  fire : (event : string) => void;
  haveEvent : (event : string) => boolean;

  constructor();
  constructor(options : StandardTimerOptions);
  constructor(options ?) {
    if ('object' === typeof options) {
      this.timeCap = options.timeCap || Infinity;
      this.countdown = options.countdown || 10;
    } else {
      this.timeCap = Infinity;
      this.countdown = 10;
    }
  }
  start() : void {
    return;
  }
  pause() : number {
    return 1;
  }
  resume() : number {
    return 1;
  }
  elapsed() : number {
    return 1;
  }
  isStarted() : boolean {
    return true;
  }
  isRunning() : boolean {
    return true;
  }
  isFinished() : boolean {
    return true;
  }
  reset() : void {
    return;
  }
}
applyMixins(StandardTimer, [Eventable]);
export = StandardTimer;
