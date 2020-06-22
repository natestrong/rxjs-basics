import {asyncScheduler, fromEvent} from "rxjs";
import {map, tap, throttleTime} from "rxjs/operators";

function calculateScrollPercent(element: HTMLElement) {
    const {scrollTop, scrollHeight, clientHeight} = element
    return (scrollTop / (scrollHeight - clientHeight)) * 100
}

let progressBar: HTMLElement | null
window.onload = () => {
    progressBar = document.getElementById('progress-bar')
}

// Stream of scroll events
const scroll$ = fromEvent<any>(document, 'scroll')
const progress$ = scroll$.pipe(
    // Map each event to percentage of page's scroll completion
    throttleTime(250, asyncScheduler, {
        leading: false,
        trailing: true
    }),
    map(({target}) => calculateScrollPercent(target.documentElement)),
    tap(console.log)
)

progress$.subscribe(percent => {
    console.log(progressBar)
    if (progressBar) progressBar.style.width = percent + '%'
})