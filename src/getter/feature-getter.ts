import { Getter } from './getter.model';

export function createFeatureGetter<Result>(propName: string): Getter<any, Result> {
  return (state: any) => state[propName];
}
