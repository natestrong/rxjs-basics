import {fromEvent, interval} from "rxjs";
import {takeUntil} from "rxjs/operators";

export {}

export class ClickUntil {
    constructor() {
        const counter$ = interval(1000)
        const click$ = fromEvent(document, 'click')

        counter$.pipe(
            takeUntil(click$)
        ).subscribe(console.log)
    }
}