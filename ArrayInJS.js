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

let newArray = [
    ["car", 2000],
    ["Truck", 500],
    ["Bike", 6500]
]

console.log(newArray);

console.log(newArray[0][0]);

let addArray = ["Scooter", 1500]
newArray = newArray.concat([addArray])
console.log();

let arrayRow = [["Toyota", "Nissan"], ["Ford"], ["Honda"]]
newArray[0].push(arrayRow[0]);
newArray[1].push(arrayRow[1]);
newArray[2].push(arrayRow[2]);
newArray.pop()
console.log(newArray);


let boxArray = [[200, 50, 300, 5], [10, 25, 7, 100], [25, 20, 70, 45], [500, 170, 11, 35]];

let display = boxArray[1];
display.pop()
console.log(display);

let user = {
    lastName : "Miriam",
    age: "106",
    sex: "female"
}

for(const key in user){
    console.log(user[key]);
}

for(const value of array){
    console.log(value)
}

for(const index in array){
    console.log(array[index]);
}