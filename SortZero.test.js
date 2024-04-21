let sortZero = require("./sortZero");

test("sortZero", () => {
    let array = [0, 0, 0, 0, 7, 0, 0];
    let result = sortZero(array);

    expect(result).toEqual([7, 0, 0, 0, 0, 0, 0]);
})