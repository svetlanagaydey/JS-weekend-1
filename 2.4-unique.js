function unique(arr) {
    let i = 0;
    while(i < arr.length-2) {
        if ( (arr[i] !== arr[i+1]) && (arr[i+1] !== arr[i+2]) && (arr[i] === arr[i+2]) ) {
            return arr[i+1];
        }  else if (arr[i] !== arr[i+1]) {
            return arr[i];
        } else if (arr[i+1] !== arr[i+2]) {
            return arr[i+2]
        }
        i++; 
    }      
}
console.log(unique([0, 1, 1, 1, 1]));