let generate = require("./ambitious_gamer.js")

test("ambitious gamer", () => {
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
    let result = generate([
            'X', 'X', 'O',
            'O', ' ', 'X',
            'X', 'O', 'O'
        ]
    );

    expect(result).toEqual(obj);
})
