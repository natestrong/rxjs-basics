import {fromEvent, of} from "rxjs";
import {first, map, take} from "rxjs/operators";

export {}

const number$ = of(1, 2, 3, 4, 5)
const clickStream$ = fromEvent<MouseEvent>(document, 'click')

// number$.pipe(
//     take(3)
// ).subscribe({
//     next: console.log,
//     complete: () => console.log('Complete')
// })

export class FindClick {
    constructor() {
        // Find location of very first click on page, as long as it's y value is > 200.
        clickStream$.pipe(
            map(event => ({
                x: event.clientX,
                y: event.clientY
            })),
            first(({y}) => y > 200)
        ).subscribe(value => {
            console.log(value)
        })
    }
}
