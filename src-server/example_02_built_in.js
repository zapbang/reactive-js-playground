import Rx from 'rxjs/Rx';
import {createSubscriber} from "./lib/util";

// Rx.Observable.interval(500)
//     .take(5)
//     .subscribe(createSubscriber("interval"));


// Rx.Observable.timer(5000)
//     .subscribe(createSubscriber("timer"));

// wait 1 second then tick at .5 second intervals for 5 ticks
// Rx.Observable.timer(1000, 500)
//     .take(5)
//     .subscribe(createSubscriber("timer"));

Rx.Observable.of("HELLO WORLD", 42, "whoa")
    .subscribe(createSubscriber("of"));

Rx.Observable.of(["this is an array", "Seriously!"])
    .subscribe(createSubscriber("of array"));

Rx.Observable.from(["this is an array", "Seriously!", 10, 20, 40])
    .subscribe(createSubscriber("from array"));

const arr = [1,2,3,4,5];
Rx.Observable.from(arr)
    .map(x => x * 5)
    .subscribe(createSubscriber("from arr"));

Rx.Observable.from([new Error("HEY!")])
    .subscribe(createSubscriber("ERROR FROM"));

// Rx.Observable.throw(new Error("HEY"))
//     .subscribe(createSubscriber("ERROR"));

Rx.Observable.empty()
    .subscribe(createSubscriber("empty"));

let sideEffect = 0;
const defer$ = Rx.Observable.defer(() => {
    sideEffect++;
    return Rx.Observable.of(sideEffect);
});

defer$.subscribe(createSubscriber("defer$one"));
defer$.subscribe(createSubscriber("defer$two"));
defer$.subscribe(createSubscriber("defer$three"));

Rx.Observable.never()
    .subscribe(createSubscriber("Never!"));

Rx.Observable.range(10, 30)
    .subscribe(createSubscriber("range"));