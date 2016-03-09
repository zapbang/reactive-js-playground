
import Rx from "rxjs/Rx";
import {createSubscriber} from './lib/util';

// const interval$ = Rx.Observable.interval(1000)
//     .take(10)
//     .publish();

// // in conjunction with .publish() above starts the above observble
// // executing immediately (Hot observable), the below start picking up
// // the data after their timout expires
// interval$.connect();

// setTimeout(function () {
//   interval$.subscribe(createSubscriber("one"));
// }, 1200);

// setTimeout(function () {
//   interval$.subscribe(createSubscriber("two"));
// }, 3200);





// const socket = { on: () => { } };

// const chatMessages$ = new Rx.Observable(observer => {
//     console.log("subscribed");
//     socket.on("chat:message", message => observer.next(message));
// }).publish();

// chatMessages$.connect();

// chatMessages$.subscribe(createSubscriber("one"));
// chatMessages$.subscribe(createSubscriber("two"));






const simple$ = new Rx.Observable(observer => {
    observer.next("one");
    observer.next("two");
    observer.next("three");
    observer.complete();
});

//const published$ = simple$.publishLast();
const published$ = simple$.publishReplay(2);


published$.subscribe(createSubscriber("one"));
published$.connect();
published$.subscribe(createSubscriber("two"));