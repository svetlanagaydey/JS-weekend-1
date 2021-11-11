function century(year) {
    let cent = Math.ceil(year/100);

    return cent;
}
console.log(century(1601));