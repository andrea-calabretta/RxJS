import { fromEvent, concatMap, interval, take} from 'rxjs';

const clicks = fromEvent(document, 'click');

const result = clicks.pipe(
  concatMap(ev => interval(500).pipe(take(4))) ,
);


result.subscribe(x => console.log(x) );

