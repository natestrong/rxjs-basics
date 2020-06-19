import {from, Observer} from "rxjs";

const fetch = require("node-fetch");


const observer: Observer<any> = {
    next: val => console.log('next', val),
    error: err => console.log('error', err),
    complete: () => console.log('complete')
}

const source$ = from(fetch('https://api.github.com/users/naughtyPhoton'))

// Can take a Promise (fetch returns a Promise). Calls .then()
const sourceGithub$ = from(fetch('https://api.github.com/users/naughtyPhoton'))

// source$.subscribe(observer)
// sourceGithub$.subscribe(observer)


// Can take an iterator.  For this we'll make a generator function..
function* hello() {
    yield 'Hello'
    yield 'World'
}

const iteratorSource$ = from(hello())

iteratorSource$.subscribe(observer)