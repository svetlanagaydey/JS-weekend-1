function camelCase(str){
    let result = "";
    for (let i=0; i<str.length; i++) {
       if ((str[i] == "-") || (str[i] == '_')) {
           continue;
        } else if (str[0].toUpperCase() == str[i])  {
            result += str[i];
        }  else if (str[i].toUpperCase() == str[i]) {
            result += str[i].toLowerCase();
        } else {
        result += str[i];
        }
    }
    return result;
}
console.log(camelCase("The-Atealth-Aarrior"));