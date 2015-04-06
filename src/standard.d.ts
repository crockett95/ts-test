import Timer = require('./timer');
import Eventable = require('./mixins/eventable');
import StandardTimerOptions = require('./options/standard');
declare class StandardTimer implements Timer, Eventable {
    private timeCap;
    private countdown;
    private elapsedTime;
    private lastChecked;
    callbacks: {};
    subscribe: (event: string, callback: () => any) => void;
    fire: (event: string) => void;
    haveEvent: (event: string) => boolean;
    constructor();
    constructor(options: StandardTimerOptions);
    start(): void;
    pause(): number;
    resume(): number;
    elapsed(): number;
    isStarted(): boolean;
    isRunning(): boolean;
    isFinished(): boolean;
    reset(): void;
}
export = StandardTimer;
