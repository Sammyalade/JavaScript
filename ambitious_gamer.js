function generate(obj, num1, num2) {
    return obj.map(item => item.row)
}

let obj = [
    {row: 0, col: 0, value: "X"},
    {row: 0, col: 1, value: "X"},
    {row: 0, col: 2, value: "O"},
    {row: 1, col: 0, value: "O"},
    {row: 1, col: 1, value: " "},
    {row: 1, col: 2, value: "X"},
    {row: 2, col: 0, value: "X"},
    {row: 2, col: 1, value: "O"},
    {row: 2, col: 2, value: "O"}
]
console.log(generate(obj))