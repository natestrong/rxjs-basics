import {fromEvent, of} from "rxjs";
import {map, mapTo, pluck} from "rxjs/operators";

// of(1, 2, 3, 4, 5).pipe(
//     map(value => value * 10)
// ).subscribe(console.log)

export class keyup {
    constructor() {
        // create an observable which prints the KeyboardEvent.code value for each keyup event
        const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
        // const keycode$ = keyup$.pipe(
        //     map(event => event.code)
        // )
        // keycode$.subscribe(console.log)

        // keycode with Pluck
        const keycodeWithPluck$ = keyup$.pipe(
            pluck('code')
        )
        keycodeWithPluck$.subscribe(console.log)

        // mapTo emits the same constant value with every stream value
        const pressed$ = keyup$.pipe(
            mapTo('pressed')
        )
        pressed$.subscribe(console.log)
    }
}
