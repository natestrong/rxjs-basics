import {Observable, Observer} from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('value', value),
    error: err => console.log('error', err),
    complete: () => console.log('complete')
}

const observable = new Observable(subscriber => {
    subscriber.next('Hello')
    subscriber.next('World')
    subscriber.complete()
})

observable.subscribe(
    value => console.log('next', value),
    error => console.log('error', error),
    () => console.log('complete')
)
