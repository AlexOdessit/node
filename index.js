const sum = (...nums) => nums.reduce((acc, num) => acc + num);

const numbers = [10, 549, 964, 654, 45, 0, 5];
console.log('Hello from Node');
console.log(sum(...numbers));
