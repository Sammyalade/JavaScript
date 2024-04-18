function highest_common_factor(...numbers) {
    function findLowestNumber(number){
        let lowestNumber = numbers[0];

        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] < lowestNumber) {
                lowestNumber = numbers[i];
            }
        }
        return lowestNumber;
    }

    function findHighestNumber(number){
        let highestNumber = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (number[i] > highestNumber) {
                highestNumber = numbers[i];
            }
        }
        return highestNumber;
    }
    let lowestNumber = findLowestNumber(numbers);


    while (true) {
        let num = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % lowestNumber === 0) {
                num++;
            }
        }
        if (num === numbers.length) {
            return lowestNumber;
        } else if(lowestNumber === findHighestNumber(numbers)) {
            lowestNumber = 2;
        } else {
            lowestNumber++;
        }
    }
}

console.log(highest_common_factor(6, 6, 6));
console.log(highest_common_factor(6, 9, 12))
