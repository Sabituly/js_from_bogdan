/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const name = "Daniyar",
      lastName = "Tashim",
      profession = 'Developer';

const info = `My name is ${name}  ${lastName} and I'm a developer`;
const infoConc = "Меня зовут " + name+ " " + lastName + " " + "и я " + profession;

console.log(info);
console.log(infoConc);
