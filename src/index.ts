import { fromEvent,mergeMap, interval, take} from 'rxjs';

const clicks = fromEvent(document, 'click');

const result = clicks.pipe(
  mergeMap(ev => interval(500).pipe(take(4))) ,
);


result.subscribe(x => console.log(x) );

