function toWeirdCase(string) {
    let arrayWords = string.split(' ');
    let arrayResult = []
   
    for (element of arrayWords) {
        let result = '';
        for (let i=0; i < element.length; i++){
            if (i%2 == 0) {
            result += element[i].toUpperCase();
            }  else {
            result += element[i];
            }
        }
        arrayResult.push(result);
    }
    return arrayResult.join(' ');
}
console.log(toWeirdCase('the simple sring'));