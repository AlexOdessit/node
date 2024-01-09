import ComponentImport, { calcFunc } from './Component.js';
const comp1 = new ComponentImport();
import os from 'os';
// console.log(os.cpus());
import _ from 'lodash';

const randomNumber = _.random(-1000, 1000, false);

console.log(randomNumber);

console.log(calcFunc('+'));
// const sum = (...nums) => nums.reduce((acc, num) => acc + num);

// const numbers = [10, 549, 964, 654, 45, 0, 5];
// console.log('Hello from Node');
// console.log(sum(...numbers));
// const test = 121313131;

//export files
