import { interval, Observable } from "rxjs";

console.log('App started');

const subscription = interval(1000).subscribe({
  next: value => console.log(value),
  complete: () => console.log('Completed!')
})

// const interval$ = new Observable<number>(subscriber => {
//   let counter = 0;

//   const intervalId = setInterval(() => {
//     console.log('new interval');
//     subscriber.next(counter++);
//   }, 1000);

//   return () => clearInterval(intervalId);
// })

// const subscription = interval$.subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Complete!'),
// })

setTimeout(() => {
  subscription.unsubscribe();
  console.log('Unsubscribe');
}, 5000)