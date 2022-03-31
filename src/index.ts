import { Observable } from "rxjs";

const observable$ = new Observable<string>(subscriber => {
  console.log('Observable executed');
  subscriber.next('Alice')
});

console.log('Before subscribe');

//* COMPLETE VERSION
// const observer = {
//   next: (value: string) => console.log(value)
// }
// observable$.subscribe(observer);

//* SHORTER VERSION -->
// observable$.subscribe({
//   next: value => console.log(value)
// });

//* SHORTEST VERSION -->
observable$.subscribe(value => console.log(value));

console.log('After subscribe');



