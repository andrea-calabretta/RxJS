import { from } from "rxjs";


const somePromise = new Promise((resolve, reject) => {
  resolve('Resolved!');
});

const observableFromPromise$ = from(somePromise);

observableFromPromise$.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Completed'),
})
