let {addition, evenNumbers, oddNumbers} = require("./arithmetic.js")

test("Add two numbers", ()=> {
    let a = 3
    let b = 5
    let result = addition(a, b)

    expect(result).toBe(8)
})

test("filter even numbers", ()=>{
    let arr = [10, 2, 3, 4, 5];
    let result = evenNumbers(arr);

    expect(result).toEqual([10, 2, 4]);
} )

test("filter odd numbers", ()=>{
    let arr = [10, 2, 3, 4, 5];
    let result = oddNumbers(arr);

    expect(result).toEqual([3, 5]);
})