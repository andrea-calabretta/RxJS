import { Observable } from "rxjs";

const someObservable$ = new Observable<string>((subscriber) => {
  subscriber.next("Alice");
  setTimeout(() => subscriber.next("Ben"), 2000);
  setTimeout(() => subscriber.next("Charlie"), 4000); //after unsubscription
});

const subscription = someObservable$.subscribe((value) => console.log(value));

setTimeout(() => {
  console.log('Unsubscribe');
  subscription.unsubscribe();
}, 3000);
