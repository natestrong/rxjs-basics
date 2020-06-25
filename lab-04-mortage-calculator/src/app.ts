import {filter, map} from "rxjs/operators";
import {combineLatest, fromEvent} from "rxjs";

export {}

export function calculateMortgage(interest: number, loanAmount: number, loanLength: number): number {
    const calculatedInterest = interest / 1200;
    const total =
        (loanAmount * calculatedInterest) /
        (1 - Math.pow(1 / (1 + calculatedInterest), loanLength));

    return total.toFixed(2);
};

window.onload = () => {
    // elements
    const loanAmount = document.getElementById('loanAmount') as HTMLInputElement
    const interest = document.getElementById('interest') as HTMLInputElement
    const loanLength = document.querySelectorAll('.loanLength') as any
    const expected = document.getElementById('expected') as HTMLSpanElement


    const createInputValueStream = (elem: HTMLInputElement) => {
        return fromEvent(elem, 'input').pipe(
            map(event => parseFloat((<HTMLInputElement>event.target).value))
        )
    }

    const interests$ = createInputValueStream(interest)
    const loanLength$ = createInputValueStream(loanLength)
    const loanAmount$ = createInputValueStream(loanAmount)

    combineLatest(
        interests$,
        loanAmount$,
        loanLength$
    ).pipe(
        map(([interest, loanAmount, loanLength]) => {
            return calculateMortgage(interest, loanAmount, loanLength)
        }),
        filter(mortgageAmount => !isNaN(mortgageAmount))
    ).subscribe(mortgageAmount => {
        console.log(mortgageAmount)
        expected.innerHTML = mortgageAmount.toString()
    })
}