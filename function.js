function solve(x) {
    function secondNumber(a, e){
        return a * x * e;
    }
    return secondNumber;
}

console.log(solve(5)(3, 2));