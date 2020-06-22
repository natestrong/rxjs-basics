import {throttleTime} from "rxjs/operators";
import {fromEvent} from "rxjs";

export {}

export class ThrottleTime {
    constructor() {
        const click$ = fromEvent(document, 'click')
        click$.pipe(
            throttleTime(1000)
        ).subscribe(console.log)
    }
}
