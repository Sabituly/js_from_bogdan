const getCollatz = (number = 1) => {
    let newNumber = number; //  не меняю внешние переменные
    const array = [];
    array.push(newNumber);
    while (newNumber !== 1) {
        if (newNumber % 2 === 0) { // если четное
            newNumber = newNumber / 2;
            array.push(newNumber);
        } else {
            newNumber = 3 * newNumber + 1; // если нечетное
            array.push(newNumber);
        }
    }
    return array; // возвращаю 1
}

console.log(getCollatz(6));


//
// function getCollatz(number) {
//     let newNumber = number; //  не меняю внешние переменные
//     const array = [];
//     array.push(newNumber);
//     while (newNumber !== 1) {
//         if (newNumber % 2 === 0) { // если четное
//             newNumber = newNumber / 2;
//             array.push(newNumber);
//         } else {
//             newNumber = 3 * newNumber + 1; // если нечетное
//             array.push(newNumber);
//         }
//         //console.log(newNumber);// вывожу значение
//     }
//
//     return array; // возвращаю 1
// }
//
// console.log(getCollatz(6));


// for(let i = 0; i < 3; i++) {
//
//     setTimeout(function () {
//         console.log(i)
//     }, 1000)
// };


"use strict";
//
// const details = {
//     message: 'Hello'
// }
//
// function getMessage() {
//     return this.message;
// }
//
// console.log(getMessage.call(details));

//3 function foo() {
//     return {bar: 1 };
// }
//
// console.log(typeof foo().bar);

//4
// const details = {
//     name: 'John!'
// }
//
// function getMessage(message) {
//     return `${message} ${this.name}`;
// }
//
// console.log(getMessage.apply(details, ['Hello']));


//6

// function getThis() {
//     return this;
// }
//
// console.log(getThis());

// let f = function g() { return 23;};
//
// console.log(typeof g());


//9

// var name = 'Sa';
// function printName() {
//     console.log(name); //underfined
//     var name = 'Peter';
//     console.log(name);
// }
//
// printName();
//
// console.log(message);
// let message = 'Hello';

// for(var i = 0; i < 10; i++) {
//
// }
// console.log(i);

//13

// let name = 'John';
// function printName() {
//     console.log(name);
// }
//
// setTimeout(() => {
//     let name = 'Peter';
//     printName();
//
// }, 1000);


//14

// const foo = bar();
// const number = 2;
// function bar() {
//     return number;
// }

//16

// var a =1, b = function a(x) { x && a(--x);};
// console.log(a);

//18

"use strict";

// function getThis() {
//     return this;
// }
//
// console.log(getThis());


//20

// var name = 'John';
//
// var user = {
//     name: 'Peter',
//     printMessage() {
//         console.log(`hello, ${this.name}!`);
//     }
// };
//
// var printMessage = user.printMessage;
// printMessage();

//21
//
// printMessage();
//
// function printMessage() {
//     console.log('Hello!');
// }


//22
//
// for(let i =0; i < 3; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, 1000)
// }

//24
//
// console.log((
//     function (a) {
//         arguments[0] = 10;
//         return a;
//     }
// )(5));


//25
//
// function foo() {
//     console.log(this);}
// foo.call(null);

//26
//
// function foo(a, b) {
//     return a * b;
// }
//
// const bar = foo.bind(null, 2);
// console.log(bar(2));


