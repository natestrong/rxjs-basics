import {fromEvent} from "rxjs";
import {debounceTime, map, mergeAll, mergeMap} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

export {}

export class WhatIsFlattening {
    constructor() {
        const textInput = document.getElementById('text-input') as HTMLInputElement
        const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup')

        // input$.pipe(
        //     debounceTime(750),
        //     map((event: KeyboardEvent) => {
        //         const term = (<HTMLInputElement>event.target).value
        //         return ajax.getJSON(`https://api.github.com/users/${term}`)
        //     }),
        //     mergeAll()
        // ).subscribe(console.log)

        input$.pipe(
            debounceTime(750),
            mergeMap((event: KeyboardEvent) => {
                const term = (<HTMLInputElement>event.target).value
                return ajax.getJSON(`https://api.github.com/users/${term}`)
            }),
        ).subscribe(console.log)
    }
}
