import {combineLatest, fromEvent, merge, Observable} from "rxjs";
import {filter, map, tap} from "rxjs/operators";

export class CombineLatest {
    constructor() {
        // const keyup$ = fromEvent(document, 'keyup')
        // const click$ = fromEvent(document, 'click')
        //
        // combineLatest(keyup$, click$).subscribe(console.log)

        // elements
        const first = document.getElementById('first') as HTMLInputElement
        const second = document.getElementById('second') as HTMLInputElement

        combineLatest(
            this.keyupAsValue(first),
            this.keyupAsValue(second),
        ).pipe(
            filter(([first, second]) => {
                return !isNaN(first) && !isNaN(second)
            }),
            map(([first, second]) => first + second)
        ).subscribe(console.log)
    }

    keyupAsValue(elem: HTMLInputElement): Observable<number> {
        return fromEvent(elem, 'keyup').pipe(
            map(event => (<HTMLInputElement>event.target).valueAsNumber)
        )
    }
}
