/** ЗАДАЧА 1 - Объявление переменной
 *
 * 1. Объявите переменную "myCountry" и присвойте ей значение -
 * строку с вашей страной
 *
 * 2. В дальнейшем не планируется присваивание нового значения этой переменной
 *
 * 3. Выведите значение переменной в консоль
 */

function squareOrSquareRoot(array) {
    for(let i = 0; i < array.length; i++) {

        if(array[i] % 2 !== 0) {

            array[i] = array[i] * array[i];
        } else {

            array[i] = Math.floor(Math.sqrt(array[i]));
        }
    }
    return array;
};

const arr3 = [4,9,3,4,7,9];
function sq(array) {
    const arr2 = array.map((e) => {
        if (e % 2 !== 0) {
            console.log("---");
            return e * e;

        } else {
            return Math.sqrt(e);
        }
    });

    return arr2;
};

console.log(sq(arr3));

const arr = [4, 9, 3, 4, 7, 9];
console.log(sq(arr));


console.log(sq(arr));
function sqrt(array) {

    array.forEach((e) =>{

        if(e % 2 !== 0) {
            e = e * e;
        } else {

            e = Math.sqrt(e);
        }
    });

    return array;
};
console.log(squareOrSquareRoot(arr));
console.log(sqrt(arr));