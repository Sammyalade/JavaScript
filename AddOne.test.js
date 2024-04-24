let addOne = require("./addOne.js");

test("addOne", ()=> {
    let array = [5, 2, 3, 9, 0];
    let result = addOne(array);

    expect(result).toEqual([ 5, 2, 3, 9, 1]);
})