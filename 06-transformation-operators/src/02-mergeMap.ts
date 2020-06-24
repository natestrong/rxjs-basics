import {from, fromEvent, interval} from "rxjs";
import {map, mergeMap, takeUntil} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

export {}

export class MergeMap {
    constructor() {
        // const mousedown$ = fromEvent(document, 'mousedown')
        // const mouseup$ = fromEvent(document, 'mouseup')
        // const interval$ = interval(1000)
        //
        // mousedown$.pipe(
        //     mergeMap(() => interval$.pipe(
        //         takeUntil(mouseup$)
        //     ))
        // ).subscribe(console.log)

        // Converting click events to AJAX post request
        const click$ = fromEvent<MouseEvent>(document, 'click')

        const coordinates$ = click$.pipe(
            map(event => ({
                x: event.clientX,
                y: event.clientY,
            }))
        )

        const coordinatesWithSave$ = coordinates$.pipe(
            mergeMap(coords => ajax.post(
                'https://run.mocky.io/v3/8434af6f-c13f-4d19-86a3-f99048c0879c',
                coords
            ))
        )

        coordinatesWithSave$.subscribe(console.log)
    }
}