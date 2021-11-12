function shorterstWordLength(string) {
    let lengthArray = [];
    for (element of string.split(' ')) {
        lengthArray.push(element.length);
    }
    console.log(lengthArray);
    let result = Math.min(...lengthArray);
    return result;
}
console.log(shorterstWordLength('aaaaaaaa ddddd sssssssss eee'))