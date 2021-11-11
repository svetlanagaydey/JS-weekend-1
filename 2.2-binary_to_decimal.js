function binaryDecimalTranslator(arr1) {
    let decimal = 0;
    arr = arr1.reverse();
    for (let i = arr.length-1; i >=0; i--) {
        if (arr[i] == 1) {
            decimal = decimal + 2 ** i;
        }
    }
    return decimal;
}

console.log(binaryDecimalTranslator([1, 0, 1, 1, 1]));