import { Observable, of } from "rxjs";


// COMPACT VERSION
// of('Alice', 'Ben', 'Charllie').subscribe(value => console.log(value));

// COMPLETE VERSION
of("Alice", "Ben", "Charlie").subscribe({
  next: value => console.log(value),
  complete: () => console.log('Completed')
}
);

