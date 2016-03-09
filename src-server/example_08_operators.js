import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';


// Rx.Observable.interval(1000)
//     .merge(Rx.Observable.interval(500))
//     .take(10)
//     .subscribe(createSubscriber("merge1"));


// Rx.Observable.merge(

//     Rx.Observable.interval(1000).map(i => `${i} seconds`),
//     Rx.Observable.interval(500).map(i => `${i} half seconds`))
//     .take(10)
//     .subscribe(createSubscriber("merge2"));

// Rx.Observable.range(1, 5)
//     .concat(Rx.Observable.range(10,3))
//     .subscribe(createSubscriber("concat"));

/// ------------------------
/// ANSWER
/// ------------------------
Rx.Observable.concat(
    Rx.Observable.interval(1000).map(i => `${i} seconds`).take(3), // take 3 or will never get to next
    Rx.Observable.interval(500).map(i => `${i} half seconds`).take(10))
    .subscribe(createSubscriber("concat2"));