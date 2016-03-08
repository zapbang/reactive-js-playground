import Rx from 'rxjs/Rx';

// PART 1
// const promise = new Promise((resolve, reject) =>
// {
//     console.log("IN PROMISE");
//     resolve("I'm sorry!");
// });

// promise.then(item => console.log(item));


// const simple$ = new Rx.Observable(observer => {

//     console.log("Generating observable");

//     setTimeout(() => {
//         observer.next("An Item!");

//         setTimeout(() => {
//             observer.next("Another Item!");
//             observer.complete();
//         }, 1000);
//     }, 1000);
// });


// const error$ = new Rx.Observable(observer => {
//     observer.error(new Error("WHOA!"));
// })

// simple$.subscribe(
//     item => console.log(`one.next ${item}`),
//     error => console.log(`one.error ${error}`),
//     () => console.log("one.complete")
// );


// setTimeout(() => {
//     error$.subscribe({
//         // any three of the function syntax will work
//         next: item => console.log(`two.next ${item}`),
//         error(error) {
//             console.log(`two.error ${error.stack}`);
//         },
//         complete: function() {
//             console.log("two.complete");
//         }
//     });
// }, 3000);


// PART 2
function createSubscriber(tag) {
    return {
        next(item) { console.log(`${tag}.next ${item}`); },
        error(error) { console.log(`${tag}.error ${error.stack || error}`); },
        complete() { console.log(`${tag}.complete`); }
    }
}

function createInterval$(time) {
    return new Rx.Observable(observer => {
        let index = 0;
        let interval = setInterval(() => {
            console.log(`Generating ${index}`);
            observer.next(index++);
        }, time);

        return () => {
            clearInterval(interval);
        }
    });
}


function take$(sourceObservable$, amount) {
    return new Rx.Observable(observer => {

        let count = 0;
        const subscription = sourceObservable$.subscribe({
            next(item) {
                observer.next(item);
                if (++count >= amount)
                    observer.complete();
            }, 
            error(error) { observer.error(error); },
            complete() { observer.complete(); }
        });

        return () => subscription.unsubscribe();

    });
}

const everySecond$ = createInterval$(1000);

const firstFiveSecond$ = take$(everySecond$, 5);

const subscription = firstFiveSecond$.subscribe(createSubscriber("one"));