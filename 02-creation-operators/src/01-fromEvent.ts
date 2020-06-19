import {fromEvent, Observer} from "rxjs";

const observer: Observer<any> = {
    next: val => console.log('next', val),
    error: err => console.log('error', err),
    complete: () => console.log('complete')
}

export class clickObservable {
    constructor() {
        const source$ = fromEvent(document, 'keyup')
        source$.subscribe(observer)
    }
}
