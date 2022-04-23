import { catchError, Observable, of } from "rxjs";

const failingHttpRequest$ = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.error(new Error('Timeout'));
  }, 3000);
});

console.log('App started');

failingHttpRequest$.pipe(
  catchError(error => of('Fallback value'))
).subscribe(
  value => console.log(value)
)
