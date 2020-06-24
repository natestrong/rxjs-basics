import {fromEvent, timer} from "rxjs";
import {exhaustMap, finalize, mergeMapTo, pluck, switchMapTo, takeUntil, tap} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

export {}

const SECONDS_BETWEEN_POLL = 3

window.onload = () => {
    const startButton = document.getElementById('start') as HTMLButtonElement
    const stopButton = document.getElementById('stop') as HTMLButtonElement
    const pollingStatus = document.getElementById('polling-status') as HTMLButtonElement
    const dogImage = document.getElementById('dog') as HTMLImageElement

    // Streams
    const startClick$ = fromEvent(startButton, 'click')
    const stopClick$ = fromEvent(stopButton, 'click')

    // We want to start pulling every x seconds, as soon as user clicks start
    startClick$.pipe(
        // map to interval. Use exhaustMap so that multiple ckicks on start are ignored.
        exhaustMap(() => timer(0, SECONDS_BETWEEN_POLL * 1000).pipe(
            // update status text
            tap(() => pollingStatus.innerHTML = 'Active'),
            // Start an AJAX request
            switchMapTo(ajax.getJSON('https://random.dog/woof.json').pipe(
                // Take only the image value from returned objet
                pluck('url')
            )),
            // Stop when stop observable fires
            takeUntil(stopClick$),
            // update status text
            finalize(() => pollingStatus.innerHTML = 'Stopped')
        ))
    ).subscribe((url: string) => {
        dogImage.src = url
    })
}
