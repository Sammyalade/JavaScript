let left_operand = 10
let right_operand = 11
operator = "*"
ans = 0

if (operator === "+") {
    ans = left_operand + right_operand
} else if (operator === "-") {
    ans = left_operand - right_operand
} else if (operator === "*") {
    ans = left_operand * right_operand
} else if (operator === "/") {
    ans = left_operand / right_operand
}

console.log(ans)