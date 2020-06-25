import {fromEvent, merge} from "rxjs";

export class Merge {
    constructor() {
        const keyup$ = fromEvent(document, 'keyup')
        const click$ = fromEvent(document, 'click')

        merge(keyup$, click$).subscribe(console.log)
    }
}
