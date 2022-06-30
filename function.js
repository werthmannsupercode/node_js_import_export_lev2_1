const meineFunktion = (a) => {
    let result = a.filter((elt) => {
        if (elt.population > 100000) {
            console.log(elt);
        }
    })

    return result;
}

const meineFunktion2 = (a) => {
    let result = a.filter((elt) => {
        if (elt.population < 100000) {
            console.log(elt);
        }
    })

    return result;
}

module.exports = { meineFunktion, meineFunktion2 }