function addOne(arr) {
    let increment = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        let sum = arr[i] + increment;
        if (sum === 10) {
            arr[i] = 0;
            increment = 1;
        }
        else {
            arr[i] = sum;
            increment = 0;
            break;
        }

    }
    if (increment === 1) {
        arr.unshift(1);
    }
    return arr;
}

console.log(addOne([5, 2, 3, 1, 2]));

console.log(addOne([5, 2, 3, 9, 9]));

console.log(addOne([5, 2, 4, 0, 0]));

console.log(addOne([9, 9, 9, 9, 9, 9, 9, 9]));

module.exports = addOne;