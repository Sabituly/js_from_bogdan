/** ЗАДАЧА 7 - Объявление и вызов функции
 *
 * 1. Объявите функцию, использую ключевое слово "function"
 *
 * 2. Не указывайте параметры функции
 *
 * 3. Внутри функции выведите в консоль своё имя
 *
 * 4. Вызовите функцию
 */

const array = [1, 2, 3, 4, 5, 6]

// function myFunction ( string, n) {
//
//        return string[n - 1];
// }
////
//
// function myFunction ( string) {
//
//     return string.slice(3);
// }
// console.log(myFunction("abcdef"));

//
// function getCube (number) {
//
//     return number ** 3;
// }
// console.log(getCube(3));
// console.log(getCube(-2));
// console.log(getCube(0));

// function getSumToN(n) {
//     let summ = 0;
//     for(let i = n; i > 0; i--) {
//               summ += i;
//     }
//     return summ;
// }
//
// console.log(getSumToN(10));
//////////////////////////////

// function getSumOfDigits(num) {
//     let summ = 0;
//     while (num !== 0) {
//         summ += num % 10;
//         num = Math.floor(num / 10);
//     }
//     return summ;
// }

// console.log(getSumOfDigits(123));
// console.log(Math.floor(123 / 10));

// function getAverage(value1,value2) {
//     return (value1 + value2) / 2;
// }
// console.log(getAverage(Infinity,0));
//
// function getCountOfOddNumbers(number) {
//     let count = 0;
//     for (let i = Math.abs(number); i >= 0; i -= 1) {
//         if (i % 2 !== 0) {
//             count +=1;
//         }
//     }
//     return count;
// }
//
// console.log(getCountOfOddNumbers(-4))

//////
//
// function getHypotenuse(a, b) {
//     return (a * a + b * b) ** .5;
// }
//
// console.log(getHypotenuse(3, 4));
//////////////////////////////////////
//
// function getMaxNumber(firstNumber, secondNumber) {
//     return firstNumber > secondNumber ? firstNumber : secondNumber;
// }
//
// console.log(getMaxNumber(-5,-6));
//
// function getCircleCircumference(radius) {
//     return 2 * Math.PI * radius;
// }
//
// console.log(getCircleCircumference(5));


function sumOfCodes(str) {
    let sum = 0;
    if (str === null || str === undefined) {
        return sum;
    }
    for (let i = 0; i < str.length; i += 1) {
        sum += str.charCodeAt(i);
    }
    return sum;
}

// console.log(sumOfCodes("My String"));

//
// function formatTime(minutes, seconds) {
//     if (minutes < 0 || seconds < 0) {
//         return '00:00';
//     }
//     const formattedMinutes = String(minutes).padStart(2, '0'); //Так как строка '5' имеет длину 1, а мы хотим, чтобы результат имел длину 2, метод padStart() добавляет в начало строки символ '0', пока длина строки не станет равной 2.
//     const formattedSeconds = String(seconds).padStart(2, '0');
//     return `${formattedMinutes}:${formattedSeconds}`;
// }
//
// function countVowels(str) {
//     let count = 0;
//     const vowels = 'aeiouyAEIOUY';
//     for (let i = 0; i < str.length; i += 1) {
//         if (vowels.includes(str[i])) { // Проверяем, содержится ли текущий символ в строке гласных
//             count += 1;
//         }
//     }
//     return count;
// }
// console.log(countVowels('apple'));
// /////////
//
// function isPalindrome(str) {
//     const reversedWord = str.split('').reverse().join('');
//     return str === reversedWord;
// }
//
// console.log(isPalindrome('madam'));
//
//
// function findLongestWord(sentence) {
//     let change = sentence.split(' ');
//     let max = change[0];
//     for (let i = 1; i < change.length; i+= 1) {
//         if (change[i].length > max.length) {
//             max = change[i];
//         }
//     }
//     return max;
// }
//
// findLongestWord('The quick brown fox');

function reverseWords(str) {
    let divided = str.split(' ');
    let summ = '';
    for (let i = 0; i < divided.length; i += 1) {
        console.log(divided[i].reverse());
    }

}

// Пример использования
reverseWords('Hello world'); // Выведет 'world Hello'



const cached = {

}

//key: value


const getSummOfNumbers = (...arg) => {
    const key = arg.join('_');

    if (cached[key] !== undefined) {
        console.log('get cach');
        return cached[key];
    }
    console.log("start working")
    let count = 0;
    arg.forEach(n => {
        count += n;

    });

    cached[key] = count;
    return count;
}

console.log(getSummOfNumbers(1,2,3,4));
console.log(getSummOfNumbers(1,2,3,4));
console.log(getSummOfNumbers(1,2,3,4));
console.log(getSummOfNumbers(1,2,3,4));
console.log(cached);