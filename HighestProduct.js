function getHighestProduct(array) {
    let length = array.length;
    let max = 0;
    for(let i = array.length-1; i >= 0; i--){
        for(let j = i+1; j < array.length; j++){
            if (array[i] * array[j] > max){
                max = array[i] * array[j];
            }
        }
    }

    return max;
}

console.log(getHighestProduct([1, 3, 5, 7, 10]));

module.exports = getHighestProduct;