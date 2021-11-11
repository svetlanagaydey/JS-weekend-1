function grouwthPopulation(p0, percent, aug, p) {
    let popTemp = p0 + p0/100*percent + aug ;
    let year = 1;
    while (popTemp < p) {
        console.log(popTemp);
      popTemp += ( p0/100*percent + aug) ;
      year++;
    }
return year;
}
console.log(grouwthPopulation(1500, 5, 100, 5000));