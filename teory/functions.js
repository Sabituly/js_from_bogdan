function multyByfactor(value, multiplier = 1) {
    return value * multiplier;
}

console.log(multyByfactor(10,2));
console.log(multyByfactor(5));

const multyAnonimus = function (value, value2 = 2) {
    return value * value2;
}
const multyAarrow = (value, value2 = 3) => value * value2;

console.log(multyAnonimus(10,3));
console.log(multyAnonimus(10));
console.log(multyAarrow(10, 4));
console.log(multyAarrow( 7));
