function abbreviate(string) {
   // result = string.split(' ');
    return (string.split(' ')[0][0].toUpperCase() + '.' + string.split(' ')[1][0].toUpperCase());
}
console.log(abbreviate('john smith'))