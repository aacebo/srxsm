import { BehaviorSubject } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { isEqual } from 'lodash';

import { Getter } from '../getter';

export class State<T> extends BehaviorSubject<T> {
  constructor(v?: T) {
    super(Object.freeze(v));
  }

  get<V>(getter: Getter<T, V>) {
    return this.pipe(
      distinctUntilChanged((a, b) => isEqual(a, b)),
      map(v => getter(v)),
    );
  }
}
