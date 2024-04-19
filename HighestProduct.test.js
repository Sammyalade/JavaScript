let highestProductTest = require("./HighestProduct.js")

test("highestProductTest", () => {
    let array = [1, 2, 3, 4, 5];
    let result = highestProductTest(array);

    expect(result).toEqual(20);
})