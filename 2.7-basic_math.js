function basicMath(operation, value1, value2) {
    switch (operation) {
        case "+": return value1 + value2;
        case "-": return value1 - value2;
        case "*": return value1 * value2;
        case "/": return value1 / value2;
    }
}
console.log(basicMath("+", 2, 5));