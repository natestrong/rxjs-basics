import {Observable, Observer} from "rxjs";

const observer: Observer<any> = {
    // Next can be called 0 to many times to deliver values to the subscriber.
    next: value => console.log('value', value),
    // Error to forward any errors that occur within Observable execution.
    error: err => console.log('error', err),
    // Complete to notify that no additional values will be delivered.
    complete: () => console.log('complete')
}

const observable = new Observable(subscriber => {
    subscriber.next('Hello')
    subscriber.next('World')
    subscriber.complete()
})

observable.subscribe(observer)
