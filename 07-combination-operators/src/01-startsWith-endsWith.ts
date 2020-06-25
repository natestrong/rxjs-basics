import {of} from "rxjs";
import {endWith, startWith} from "rxjs/operators";

export {}

const numbers$ = of(1, 2, 3)

numbers$.pipe(
    startWith('a'),
    endWith('the end')
).subscribe(console.log)