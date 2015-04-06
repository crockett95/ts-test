/// <reference path="../bower_components/DefinitelyTyped/moment/moment.d.ts" />

'use strict';

interface Timer {

  start : () => void;
  pause : () => number;
  resume : () => number;
  isStarted : () => boolean;
  isRunning : () => boolean;
  isFinished : () => boolean;
  reset : () => void;

}
export = Timer;
