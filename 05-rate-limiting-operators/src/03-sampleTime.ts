import {fromEvent, interval} from "rxjs";
import {map, sample, sampleTime} from "rxjs/operators";

export {}

export class SampleTime {
    constructor() {
        const click$ = fromEvent<MouseEvent>(document, 'click')
        // click$.pipe(
        //     sampleTime(1000),
        //     map(clickEvent => clickEvent.clientY)
        // ).subscribe(console.log)

        const timer$ = interval(1000)
        timer$.pipe(
            sample(click$)
        ).subscribe(console.log)
    }
}