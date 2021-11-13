function maskify(string) {
    let result = '';
    for (let i=0; i < string.length-4; i++) {
        result += '#';
    } for (i=string.length - 4; i < string.length; i++) {
        result += string[i];
    }
    return result;
}
console.log(maskify("1234567890"));