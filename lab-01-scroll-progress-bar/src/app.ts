import {fromEvent} from "rxjs";
import {map} from "rxjs/operators";

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
    map(({target}) => calculateScrollPercent(target.documentElement))
)

progress$.subscribe(percent => {
    console.log(progressBar)
    if (progressBar) progressBar.style.width = percent + '%'
})