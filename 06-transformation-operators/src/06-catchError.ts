import {EMPTY, empty, fromEvent, Observable, scheduled} from "rxjs";
import {catchError, debounceTime, distinctUntilChanged, pluck, switchMap} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

export {}

export class CatchError {
    constructor() {
        const typeAhead = document.getElementById('typeahead-container') as HTMLDivElement
        const textInput = document.getElementById('text-input') as HTMLInputElement
        const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup')

        const BASE_URL = 'https://api.openbrewerydb.org/breweries'

        input$.pipe(
            debounceTime(200),
            pluck('target', 'value'),
            distinctUntilChanged(),
            switchMap(searchTerm => {
                return ajax.getJSON(`${BASE_URL}?by_name=${searchTerm}`).pipe(
                    catchError(error => {
                        return EMPTY
                    })
                )
            })
        ).subscribe((response: any) => {
            typeAhead.innerHTML = response.map(
                (b: any) => b.name
            ).join('<br>')
        })
    }
}