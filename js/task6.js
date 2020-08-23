// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор,
// пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel,
// если массив не пустой, необходимо посчитать сумму всех
// элементов массива и записать ее в переменную total.
// Используй цикл for или for...of.После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.

// 🔔 Делать проверку того, что пользователь ввел именно число,
// а не произвольный набор символов, не обязательно.Если хочешь,
// в случае некорректного ввода, показывай alert с текстом
// 'Было введено не число, попробуйте еще раз', при этом результат
// prompt записывать в массив чисел не нужно, после чего снова пользователю
// предлагается ввести число в prompt.

"use strict";
let input;
const numbers = [];
let total = 0;
do {
  input = Number(prompt("Введите число"));
  numbers.push(input);
} while (input);
for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
console.log(`Общая сумма чисел равна ${total}`);

// "use script";
// let input;
// const numbers = [];
// let total = 0;
// do {
//   input = Number(prompt("введи число"));
//   numbers.push(input);
// } while (input !== null);
// for (let i = 0; i < numbers.length; i += 1) {
//   total += numbers[i];
// }
// console.log(`Общая сумма чисел равна ${total}`);

// задача-6 бот
// Напиши функцию mapArray(array), принимающую 1 параметр array - массив чисел.
// Функция создает новый массив numbers размером в длину массива array и
// заполняет его числами из массива array умноженными на 10.
// Для перебора массива и добавления новых значений используй цикл for
// По завершению перебора массива array возвращается массив numbers.

// function mapArray(array) {
//   "use strict";
//   const numbers = new Array();
//   for (let i = 0; i < array.length; i += 1) {
//     numbers.push(array[i] * 10);
//   }
//   return numbers;
// }
//console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]
//console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]
