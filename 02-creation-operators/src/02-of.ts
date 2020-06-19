import {Observer, of, range} from "rxjs";


const observer: Observer<any> = {
    next: val => console.log('next', val),
    error: err => console.log('error', err),
    complete: () => console.log('complete')
}

const source$ = of(1, 2, 3, 4, 5)
const sourceRange$ = range(1, 10)

source$.subscribe(observer)
sourceRange$.subscribe(observer)