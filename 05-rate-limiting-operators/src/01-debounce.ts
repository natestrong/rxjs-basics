import {fromEvent} from "rxjs";
import {debounceTime, distinctUntilChanged, pluck} from "rxjs/operators";

export {}

export class inputDebounce {
    constructor() {
        let inputElement = document.getElementById('text-input') as HTMLInputElement

        const click$ = fromEvent(document, 'click')
        click$.pipe(
            debounceTime(500)
        ).subscribe(console.log)

        fromEvent(inputElement, 'keyup').pipe(
            debounceTime(500),
            pluck('target', 'value'),
            distinctUntilChanged()
        ).subscribe(console.log)
    }
}
