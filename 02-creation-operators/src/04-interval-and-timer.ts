import {interval, timer} from "rxjs";

// Emits once every second
// const interval$ = interval(1000)
// interval$.subscribe(console.log)

// User timer observable to emit event immediately and then with an interval
const timer$ = timer(0, 1000)
timer$.subscribe(console.log)