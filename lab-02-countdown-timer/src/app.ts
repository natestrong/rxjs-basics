import {interval, timer} from "rxjs";
import {mapTo, scan, takeWhile} from "rxjs/operators";

let countdownElement: HTMLElement | null
window.onload = () => {
    countdownElement = document.getElementById('countdown')
}

const counter$ = timer(100, 1000).pipe(
    mapTo(-1),
    scan((accumulator, current) => accumulator + current, 11),
    takeWhile(value => value >= 0)
)

counter$.subscribe(value => {
    if (value) {
        countdownElement!.innerText = value.toString()
    } else {
        countdownElement!.innerText = 'Finished!'
        countdownElement!.style.width = '140px'
    }
})