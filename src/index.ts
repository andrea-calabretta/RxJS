import { Observable } from "rxjs";

const observable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Alice');
  subscriber.next('Ben');
  setTimeout(() => subscriber.error(new Error('Failure')), 2000);
  //after error No next, no complete happens
  setTimeout(() => {
    subscriber.next('Charlie'); // this won't happen
    subscriber.complete(); // also this won't happen
  }, 4000);
  return () => {
    console.log("Teardown logic");
  };
});

console.log("Before subscribe");

observable$.subscribe({
  next: (value) => console.log(value),
  error: err => console.log(err.message),
  complete: () => console.log('Completed!'),
});

console.log('After subscribe');
