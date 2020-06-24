import {fromEvent, interval} from "rxjs";
import {concatMap, exhaustMap, take} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

export class ExhaustMap {
    constructor() {
        // const interval$ = interval(1000)
        // const clicks$ = fromEvent(document, 'click')
        //
        // clicks$.pipe(
        //     exhaustMap(() => interval$.pipe(take(3)))
        // ).subscribe(console.log)

        const loginButton = document.getElementById('login-button') as HTMLButtonElement

        const login$ = fromEvent(loginButton, 'click')

        login$.pipe(
            exhaustMap(() => this.authenticateUser())
        ).subscribe(console.log)

    }

    authenticateUser() {
        return ajax.post('https://regres.in/api/login',
            {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        )
    }
}
