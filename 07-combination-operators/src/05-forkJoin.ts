import {forkJoin, of} from "rxjs";
import {delay} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

export {}

const numbers$ = of(1, 2, 3,)
const letters = of('a', 'b', 'c')

forkJoin({
    numbers: numbers$,
    letters: letters.pipe(
        delay(3000))
}).subscribe(console.log)

// another example
const GITHUB_API_BASE = 'https://api.github.com'

forkJoin(
    {
        user: ajax.getJSON(`${GITHUB_API_BASE}/users/reactivex`),
        repo: ajax.getJSON(`${GITHUB_API_BASE}/users/reactivex/repos`),
    }
).subscribe(console.log)
