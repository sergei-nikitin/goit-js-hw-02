// Напиши функцию logItems(array),
//     которая получает массив и использует цикл for,
//     который для каждого элемента массива будет выводить
// в консоль сообщение в формате[номер элемента]-[значение элемента].

// Нумерация должна начинаться с 1.
// К примеру для первого элемента массива['Mango', 'Poly', 'Ajax']
// с индексом 0 будет выведено '1 - Mango',
//     а для индекса 2 выведет '3 - Ajax'.

const logItems = function (array) {
  let message = " ";
  for (let i = 0; i <= array.length - 1; i += 1) {
    message += ` ${[i + 1]} - ${array[i]} \n `;
  }
  return message;
};

console.log(logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));
