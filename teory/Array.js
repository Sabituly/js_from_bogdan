const myArray = [1, 'Danik', true];
const myArray2 = [1, 'Danik', true];

console.log(myArray === myArray2);

const myArray3 = myArray2;
console.log(myArray2===myArray3);

/////////////////////////////////////////
/*Прототипы влияют какие методы будут доступны*/ //_proto_: Array(0)

//Чтение значений массива

console.log(myArray[0]);
console.log(myArray.length);

//change array length

myArray3.length = 7;
console.log(myArray3);
console.log(myArray2);
myArray3.length = 3;