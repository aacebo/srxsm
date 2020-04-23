export function createFeatureGetter<T>(propName: keyof T) {
  return (state: T) => state[propName];
}
