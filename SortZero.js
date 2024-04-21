function sortZero(array) {
    for (let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if(array[i] === 0){
                array[i] = array[j];
                array[j] = 0;
            }
        }
    }
    return array;
}

console.log(sortZero([3, 2, 0, -1, 7, 0, 8]));

module.exports = sortZero;