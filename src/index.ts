import { Observable } from "rxjs";

const helloButton = document.querySelector('button#hello');

const helloClick$ = new Observable<MouseEvent>(subscriber => {
  helloButton.addEventListener('click', (event) => 
    subscriber.next(<MouseEvent>event));
});

helloClick$.subscribe(
  event => console.log('Sub 1:', event.type, event.x, event.y)
);

helloClick$.subscribe(
  event => console.log('Sub 2:', event.type, event.x, event.y)
);

