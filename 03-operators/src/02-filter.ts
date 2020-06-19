import {fromEvent, of} from "rxjs";
import {filter, mapTo, pluck} from "rxjs/operators";

// of(1, 2, 3, 4, 5, 6).pipe(
//     filter(value => value % 2 === 0)
// ).subscribe(console.log)

export class keyupFilter {
    constructor() {
        const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
        const keycode$ = keyup$.pipe(
            pluck('code'),
            filter(value => value === 'Enter')
        )
        keycode$.subscribe(console.log)
    }
}
