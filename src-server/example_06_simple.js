import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';

Rx.Observable.range(1, 10)
    .do(a => console.log(`from do ${a}`))
    .map(a => a * a)
    .subscribe(createSubscriber("simple"));


Rx.Observable.range(1,10) 
    .finally(() => console.log(`from finally`))
    .map(a => a * 2)
    .subscribe(createSubscriber("finally"));


Rx.Observable.range(1, 10)
    .filter(a => a < 5)
    .subscribe(createSubscriber("filter"));


Rx.Observable.interval(1000)
    .startWith(-1)
    .subscribe(createSubscriber("interval"));