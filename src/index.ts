import { observable, Observable } from "rxjs";

const someObservable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
  subscriber.next("Alice");
  setTimeout(() => subscriber.next("Ben"), 2000);
  setTimeout(() => subscriber.next("Charlie"), 4000);
});


console.log('Subscription 1 starts');
someObservable$.subscribe(value => console.log('Subscription 1:', value));

setTimeout(() => {
  console.log('Subscription 2 starts');
  someObservable$.subscribe(value => console.log('Subscription 2:', value));
}, 1000);


