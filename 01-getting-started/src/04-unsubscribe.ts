import {Observable, Observer, Subscription} from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('value', value),
    error: err => console.log('error', err),
    complete: () => console.log('complete')
}

const observable = new Observable(subscriber => {
    let count = 0

    const id = setInterval(() => {
        subscriber.next(count)
        count++
    }, 1000)

    // This function will run upon calling complete, this killing the setInterval.
    return () => {
        console.log('called')
        clearInterval(id)
    }
})

// subscription.add() will add another subscription to current one so they can be unsubscribed at one time.
const subscriptions = new Subscription()
subscriptions.add(observable.subscribe(observer))
subscriptions.add(observable.subscribe(observer))

setTimeout(() => {
    subscriptions.unsubscribe()
}, 3500)
