import { Observable } from 'rxjs';

const someObservable$ = new Observable<string>(subscriber => {
  subscriber.next('Alice');
  subscriber.next('Ben');
  subscriber.next('Charlie');
});

const observer = {
  next: (value: string) => console.log(value)
}

someObservable$.subscribe(observer);
