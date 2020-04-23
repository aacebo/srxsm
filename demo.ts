import { State, createGetter } from './src';

interface IState {
  readonly test: number;
  readonly prop: string;
}

const state = new State<IState>({ test: 1, prop: 'pop' });

const getState = createGetter((state: IState) => state);
const getTest = createGetter(getState, state => state.test);
const getProp = createGetter(getState, state => state.prop);
const getTestProp = createGetter(getTest, getProp, (test, prop) => ({ test, prop }));

state.get(getTest).subscribe(test => console.log(`[TEST] - ${test}`));
state.get(getProp).subscribe(prop => console.log(`[PROP] - ${prop}`));
state.get(getTestProp).subscribe(testProp => console.log(testProp));

console.log('\n\nsetting...\n\n');

state.next({ test: 1, prop: 'pop' }); // no change
state.next({ test: 22, prop: 'pop' }); // test change
state.next({ test: 10, prop: 'test' }); // prop change
