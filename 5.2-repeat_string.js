function repeatStr(number, string) {
    let result = '';
    for (let i=0; i < number; i++) {
        result +=string;
    }
return result;
}
console.log(repeatStr(3, 'yes!'))