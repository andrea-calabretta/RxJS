import { Observable } from "rxjs";

const observable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Alice');
  subscriber.next('Ben');
  setTimeout(() => subscriber.next('Charlie'), 2000);
  setTimeout(() => subscriber.error(new Error('Failure')), 4000);
  return () => {
    console.log("Teardown logic");
  };
});

console.log("Before subscribe");

//EXPLICIT VERSION
// const observer = {
//   next: (value: string) => console.log(value),
//   error: (err: { message: string; }) => console.log(err.message),
//   complete: () => console.log('Completed!')
// }
// observable$.subscribe(observer);

//SHORTER VERSION
observable$.subscribe({
  next: (value) => console.log(value),
  error: err => console.log(err.message),
  complete: () => console.log('Completed!'),
});

console.log('After subscribe');
