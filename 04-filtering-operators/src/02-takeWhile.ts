import {map, take, takeWhile} from "rxjs/operators";
import {fromEvent} from "rxjs";

export {}

const clickStream$ = fromEvent<MouseEvent>(document, 'click')

export class FindClick2 {
    constructor() {
        // Takes all clicks until the y value is above 500
        clickStream$.pipe(
            map(event => ({
                x: event.clientX,
                y: event.clientY
            })),
            takeWhile(({y}) => y < 500, true)
        ).subscribe(value => {
            console.log(value)
        })
    }
}
