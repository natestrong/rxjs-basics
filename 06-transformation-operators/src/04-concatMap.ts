import {fromEvent, interval, of} from "rxjs";
import {concatMap, delay, distinctUntilChanged, take} from "rxjs/operators";

export {}

export class ConcatMap {
    constructor() {
        // const interval$ = interval(1000)
        // const clicks$ = fromEvent(document, 'click')
        //
        // clicks$.pipe(
        //     concatMap(() => interval$.pipe(take(3)))
        // ).subscribe(console.log)

        const radioButtons = document.querySelectorAll('.radio-option')

        const answerChange$ = fromEvent(radioButtons, 'click')

        answerChange$.pipe(
            concatMap((event: any) => this.saveAnswer(event.target.value))
        ).subscribe(console.log)
    }

    saveAnswer(answer: string) {
        return of(`Saved ${answer}`).pipe(
            delay(1500)
        )
    }
}