function camelCase(str){
    let splitStr = str.split("-");
    let result = "";
      
    for(let i = 0; i < splitStr.length; i++){
      if (i===0) {
        result += splitStr[i][0].toLowerCase() + splitStr[i].slice(1);
      } else {
        result += splitStr[i][0].toUpperCase() + splitStr[i].slice(1);    
      }
    }
    return result;
}
console.log(camelCase("The-Atealth-Aarrior"));