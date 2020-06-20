import {from} from "rxjs";
import {map, scan} from "rxjs/operators";

const user = [
    {name: 'Brian', loggedIn: false, token: null},
    {name: 'Brian', loggedIn: true, token: 'abc'},
    {name: 'Brian', loggedIn: true, token: '123'},
]

const state$ = from(user).pipe(
    scan((accumulator, currentValue) => {
        return {...accumulator, ...currentValue}
    }, {})
)

const names$ = state$.pipe(
    map((user: any) => user.name)
).subscribe(console.log)