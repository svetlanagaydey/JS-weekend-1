function fibonachi(n) {
    let prev = 0;
    let next = 1;

    for (let i=0; i<n-2; i++) {
       let sum = prev + next;
       prev = next;
       next = sum;
    }
    return next;
}

console.log(fibonachi(10));