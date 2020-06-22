import {fromEvent} from "rxjs";
import {sampleTime} from "rxjs/operators";

export {}

export class AuditTime {
    constructor() {
        const click$ = fromEvent(document, 'click')

        click$.pipe(
            sampleTime(4000)
        ).subscribe(console.log)
    }
}
