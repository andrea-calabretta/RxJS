import { fromEvent, Subject } from "rxjs";

const emitButton = document.querySelector('button#emit');
const inputElement: HTMLInputElement = document.querySelector('#value-input');
const subscribeButton = document.querySelector('button#subscribe');

const value$ = new Subject<string>();

fromEvent(emitButton, 'click').subscribe(
  () => value$.next(inputElement.value)
  );

fromEvent(subscribeButton, 'click').subscribe(
  () => {
    console.log('New Subscription');
    value$.subscribe(value => console.log(value));
  }
);
