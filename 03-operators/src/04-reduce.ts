import {from, interval} from "rxjs";
import {reduce, take} from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5]
const totalReducer = (accumulator: number, currentValue: number) => {
    console.log({accumulator, currentValue})
    return accumulator + currentValue
}
// Normal JavaScript array reducer:
// const total = numbers.reduce(totalReducer, 0)
// console.log(total)

// from(numbers).pipe(
//     reduce(totalReducer, 0)
// ).subscribe(console.log)

interval(1000).pipe(
    take(5),
    reduce(totalReducer, 0)
).subscribe({
    next: value => console.log(value),
    complete: () => console.log('complete')
})