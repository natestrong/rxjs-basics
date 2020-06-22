import {from, Observable, of} from "rxjs";
import {distinctUntilChanged, distinctUntilKeyChanged, map, scan} from "rxjs/operators";

export {}

// const numbers$ = of(1, 1, 2, 3, 3, 3, 4, 5)
//
// numbers$.pipe(
//     distinctUntilChanged()
// ).subscribe(console.log)


type User = {
    name: string,
    loggedIn: boolean,
    token: string | null
}

const user: User[] = [
    {name: 'Brian', loggedIn: false, token: null},
    {name: 'Brian', loggedIn: true, token: 'abc'},
    {name: 'Brian', loggedIn: true, token: '123'},
    {name: 'NateDawg', loggedIn: true, token: '123'},
]

const state$ = from(user).pipe(
    scan((accumulator, currentValue) => {
        return {...accumulator, ...currentValue}
    }, {})
)

const names$ = state$.pipe(
    map(k => k as User),
    distinctUntilKeyChanged('name'),
    map((user: any) => user.name),
).subscribe(console.log)