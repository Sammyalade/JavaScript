function solve(x) {
    function secondNumber(a){
        return a * x;
    }
    return secondNumber;
}

console.log(solve(5)(3));