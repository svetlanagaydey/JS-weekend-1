function fibonachi(n) {
    const fibonachiArray = [0, 1, 1];

    for (let i=3; i<n; i++) {
        fibonachiArray.push(fibonachiArray[i-3] + fibonachiArray[i-2] + fibonachiArray[i-1]);
    }
    return fibonachiArray;
}

console.log(fibonachi(10));