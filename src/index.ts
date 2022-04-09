import { from } from "rxjs";


const somePromise = new Promise((resolve, reject) => {
  // resolve('Resolved!');
  reject('Rejected!')
});

const observableFromPromise$ = from(somePromise);

observableFromPromise$.subscribe({
  next: value => console.log(value),
  error: err => console.log('Error:', err),
  complete: () => console.log('Completed'),
})
