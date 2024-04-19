function generate(obj) {
    return obj.map(item => item.value)
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

function generate2(obj, length, width) {
    let board = Array.from({length}, () => Array(width));

    obj.forEach(item => {
        board[item.row][item.col] = item.value;
    });

    return board;
}

console.log(generate2(obj, 3, 3))
module.exports = generate;