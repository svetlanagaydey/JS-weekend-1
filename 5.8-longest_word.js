function longestWord(string) {
    let result = '';
    for (element of string.split(' ')) {
        if (result.length < element.length) {
            result = element;
        }

    }
    return result;
}
console.log(longestWord('a bb ccc dddd eeeee ffffff'));