import { debounceTime, fromEvent, map } from "rxjs";

const sliderInput = document.querySelector('input#slider');

fromEvent(sliderInput, 'input').pipe(
  debounceTime(2000),
  map(event => (<HTMLInputElement>event.target)['value'])
).subscribe(value => console.log(value));

