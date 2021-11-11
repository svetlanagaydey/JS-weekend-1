function sumLowestNumbers(arr) {
   return arr.sort((a,b) => a - b).slice(0, 2);
}
console.log(sumLowestNumbers([2, 3, 7, 1, 5]));