import { fromEvent, interval, take, exhaustMap} from 'rxjs';

const clicks = fromEvent(document, 'click');

const result = clicks.pipe(
  exhaustMap(ev => interval(1000).pipe(take(4))) ,
);


result.subscribe(x => console.log(x) );

