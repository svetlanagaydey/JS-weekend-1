function nextPerfectSquares(num) {
    return Number.isInteger(Math.sqrt(num)) ? ((Math.sqrt(num) + 1 ) ** 2) : -1;
}
console.log(nextPerfectSquares(625));