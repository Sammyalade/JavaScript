let array = [1, 2, 3];

array.push(4);
console.log(array);
array.pop()
console.log(array);

array.shift();
console.log(array);
array.unshift(1);
console.log(array);


console.log(array.slice(0,2));
array.splice(1, 1, 2, 3)
console.log(array);
let num = [4, 5, 6]

console.log(array.concat(num));