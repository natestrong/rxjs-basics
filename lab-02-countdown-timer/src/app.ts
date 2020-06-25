import {EMPTY, fromEvent, interval, merge, Observable, timer} from "rxjs";
import {delay, mapTo, scan, startWith, switchMap, takeUntil, takeWhile} from "rxjs/operators";

const COUNTDOWN_LENGTH = 10

window.onload = () => {
    const countdownElement = document.getElementById('countdown') as HTMLElement
    const startButton = document.getElementById('start') as HTMLButtonElement
    const pauseButton = document.getElementById('pause') as HTMLButtonElement

    const pause$ = fromEvent<MouseEvent>(pauseButton, 'click')
    const start$ = fromEvent<MouseEvent>(startButton, 'click')
    const counter$ = interval(1000)

    merge(
        start$.pipe(mapTo(true)),
        pause$.pipe(mapTo(false))
    ).pipe(
        // map to counter
        switchMap(shouldStart => {
            return shouldStart ? counter$ : EMPTY
        }),
        mapTo(-1),
        scan((accumulator, current) => accumulator + current, COUNTDOWN_LENGTH),
        takeWhile(value => value >= 0),
        startWith(COUNTDOWN_LENGTH),
    ).subscribe(value => {
        if (value) {
            countdownElement!.innerText = value.toString()
        } else {
            countdownElement!.innerText = 'Finished!'
            countdownElement!.style.width = '140px'
        }
    })
}


