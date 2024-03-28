
console.log(solve("3")("2", "4"))
function solve(x) {
    function secondNumber(a, e){
        return a * x * e;
    }
    return secondNumber;
}

console.log(solve(5)(3, 2));


const calc = function (x) {
    function secondNumber(a, e){
        return a * x * e;
    }
    return secondNumber;
}

console.log(calc(3)(2, 3))