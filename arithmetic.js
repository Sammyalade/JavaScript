function addition(x, y){
    return x + y;
}

function evenNumbers(numbers){
    return numbers.filter(number => number % 2 === 0);
}

function oddNumbers(numbers){
    return numbers.filter(number => number % 2 !== 0);
}


module.exports = {addition, evenNumbers, oddNumbers};