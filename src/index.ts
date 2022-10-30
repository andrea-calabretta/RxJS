import { fromEvent,switchMap, interval, take} from 'rxjs';

const clicks = fromEvent(document, 'click');

const result = clicks.pipe(
  switchMap(ev => interval(500)) ,
);


result.subscribe(x => console.log(x) );

