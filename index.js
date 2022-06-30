const { meineFunktion, meineFunktion2 } = require("./function");
const data = require("./data");

console.log("Städte mit mehr als tausend Einwohner");
meineFunktion(data);
console.log("Städte mit weniger als tausend Einwohner");
meineFunktion2(data);