export {}

import {Observable, Observer} from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('value', value),
    error: err => console.log('error', err),
    complete: () => console.log('complete')
}

const observable = new Observable(subscriber => {
    let count = 0

    const id = setInterval(() => {
        subscriber.next(count)
        subscriber.complete()
        count++
    }, 1000)

    // This function will run upon calling complete, this killing the setInterval.
    return () => {
        console.log('called')
        clearInterval(id)
    }
})

console.log('before')
observable.subscribe(observer)
console.log('after')

