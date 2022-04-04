import { Observable } from "rxjs";

const interval$ = new Observable<number>(subscriber => {
  let counter = 1;

  setInterval(() => {
    console.log('Emitted', counter);
    subscriber.next(counter++);
  }, 2000);
});

const subscription = interval$.subscribe(value => console.log(value));

setTimeout(() => {
  console.log('Unsubscribe');
  subscription.unsubscribe();
}, 7000);