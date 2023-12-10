const numbers = [100, 101, 5, 5, 1];

const transformedNumbers = numbers.map((number) => {
    if (number % 2 !== 0 && number % 3 !== 0) {
        // нечетные числа возводим в квадрат
        return number * number;
    } else {
        // четные числа вычисляем корень квадратный
        return Math.floor( Math.sqrt(number));
    }
});

console.log(transformedNumbers);