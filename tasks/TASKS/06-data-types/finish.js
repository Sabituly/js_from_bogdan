/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

const myName = "Daniyar";
let myAge = 35;
const isDeveloper = true;
let number = null;
let notUndefined = undefined;


const myObj = {

    name : myName,
    age : myAge,
    isDeveloper : isDeveloper
};

console.log(typeof isDeveloper);
const myArray = [myObj, number, notUndefined];

for(let key in myObj) {

    console.log(typeof key);
};

for (let i = 0; i < myArray.length; i++) {

    console.log(typeof myArray[i]);
}

