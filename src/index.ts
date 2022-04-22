import { filter, map, of, tap } from "rxjs";

of(1, 7, 3, 6, 2).pipe(
  tap(value => console.log('Spy: ', value)),
  map(value => value * 2),
  filter(value => value > 5),
).subscribe(value => console.log('Output:', value));

// of(1, 7, 3, 6, 2).pipe(
//   filter(value => value > 5),
//   map(value => value * 2),
//   tap(value => console.log('Spy: ', value)),
// ).subscribe(value => console.log('Output:', value));


// of(1, 7, 3, 6, 2).pipe(
//   filter(value => value > 5),
//   map(value => value * 2),
//   tap({
//     next : value => console.log('Spy: ', value),
//     complete : () => console.log('Spy: complete'),
//   }),
// ).subscribe(value => console.log('Output:', value));