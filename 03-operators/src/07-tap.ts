import {from} from "rxjs";
import {map, tap} from "rxjs/operators";

const numbers$ = from([1, 2, 3, 4, 5])

numbers$.pipe(
    map(value => value * 10),
    tap({
        next: value => console.log(value),
        complete: () => console.log('Complete')
    })
).subscribe(value => {
    console.log('from subscribe', value)
})