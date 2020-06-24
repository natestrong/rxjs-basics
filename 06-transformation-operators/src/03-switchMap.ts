import {fromEvent, interval} from "rxjs";
import {debounceTime, distinctUntilChanged, map, mergeMap, pluck, switchMap, takeUntil} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

export {}

export class SwitchMap {
    constructor() {
        // const click$ = fromEvent(document, 'click')
        // const interval$ = interval(1000)
        //
        // click$.pipe(
        //     switchMap(() => interval$)
        // ).subscribe(console.log)

        const typeAhead = document.getElementById('typeahead-container') as HTMLDivElement
        const textInput = document.getElementById('text-input') as HTMLInputElement
        const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup')

        const BASE_URL = 'https://api.openbrewerydb.org/breweries'

        input$.pipe(
            debounceTime(200),
            pluck('target', 'value'),
            distinctUntilChanged(),
            switchMap(searchTerm => {
                return ajax.getJSON(`${BASE_URL}?by_name=${searchTerm}`)
            })
        ).subscribe((response: any) => {
            typeAhead.innerHTML = response.map(
                (b: any) => b.name
            ).join('<br>')
        })
    }
}