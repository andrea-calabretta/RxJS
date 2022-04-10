import { fromEvent, Observable } from "rxjs";

const triggerButton = document.querySelector('button#trigger');

// fromEvent<MouseEvent>(triggerButton, 'click').subscribe(
//   event => console.log(event.type, event.x, event.y)
// );

const triggerClick$ = new Observable<MouseEvent>(subscriber => {
  const clickHandlerFn = (event: MouseEvent) => {
    console.log('Event callback executed');
    subscriber.next(<MouseEvent>event);
  };
  triggerButton.addEventListener('click', clickHandlerFn);
  
  return () => {
    triggerButton.removeEventListener('click', clickHandlerFn )
  }
});

const subscription = triggerClick$.subscribe(
  event => console.log(event.type, event.x, event.y)
);

setTimeout(() => {
  console.log('Unsubscribe');
  subscription.unsubscribe();
}, 5000);