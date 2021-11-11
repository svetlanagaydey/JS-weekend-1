function sleeingPassangers (station1in, station2out, station2in, station3out, station3in, station4out) {
    const system = [
        [station1in, 0],
        [station2in, station2out],
        [station3in, station3out],
        [0, station4out],
    ]

    let numberSliping = 0;
    for (numPas of system) {
        numberSliping += numPas[0] - numPas[1];
    }


    return numberSliping;
}
console.log(sleeingPassangers(4, 2, 4, 2, 13, 6));