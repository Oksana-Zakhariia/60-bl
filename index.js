// console.log(1)
// //Використовуючи функцію if...else,
// //напишіть код, який запитуватиме:
// //"Яка офіційна назва JavaScript?"
// //Якщо користувач вводить "ECMAScript",
// // показати через alert: "Вірно!"
// //інакше відобразити:"Не знаєте? ECMAScript!"
// const userInput = prompt("Яка офіційна назва JavaScript?")
// console.log(userInput);
// if (userInput === "ECMAScript") {
//     alert("Вірно!")

// } else {
//     alert("Не знаєте? ECMAScript!")

// }

// +++++++++++++++++++++++++++++++++++++++++++

// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//Рядок у форматі годин і хвилин
// 70 === 01:10

// const userInput = Number(prompt("Яка кількість хвилин?"));
// // console.log(userInput);

// let hours = Math.floor(userInput / 60);
// hours = String(hours).padStart(2, "0");
// // console.log(hours);
// let minutes = userInput % 60;
// minutes = String(minutes).padStart(2, "0");
// // console.log(minutes);
// console.log(`${hours}:${minutes}`);

//4. За допомогою циклу for додайте всі парні числа від max до min

// const min = 10;
// const max = 35;

// let total = 0;
// for (i = max; i >= min; i -= 1) {
//     if (i % 2 === 0) {
//        continue
//     }
//     console.log(i);
//      total += i;
// }
// console.log(total);

// При завантаженні сторінки користувачеві пропонується
//В prompt ввести число. Введення додається до значення
//Змінної total.
//Операція введення числа триває до того часу,
//Поки користувач не натисне кнопку Cancel в prompt.
//Після того, як користувач припинив введення натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
//Робити перевірку,що користувач ввів саме число,
//а не довільний набір символів не потрібно.
// let userInput = Number(prompt('Введіть число'));
// let total = 0;
// while (userInput !== 0) {
//     total += userInput
//     userInput = Number(prompt('Введіть число'));
// }
// console.log(total)

// У змінній min лежить число від 0 до 59.
// Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
// [0 до 15) – перша чверть години
// [15 до 30) – друга чверть години
// [30 до 45) – третя чверть години
// [45 до 60) – четверта чверть години

// const min = 12
// if (min < 15 && min >= 0) {
//     console.log("перша чверть години")
// } else if (min >= 15 && min < 30) {
//     console.log("друга чверть години")
// } else if (min >= 30 && min < 45) {
//     console.log("третя чверть години")
// } else if (min >= 45 && min < 60) {
//     console.log("четверта чверть години")
// }
// else { console.log("ви не потрапили в діапазон години") }
// const min = 55
// switch (true) {
//     case min < 15 && min >= 0:
//         console.log("перша чверть години")
//         break;
//     case min >= 15 && min < 30:
//         console.log("друга чверть години")
//         break;
//     case min >= 30 && min < 45:
//         console.log("третя чверть години")
//         break;
//     case min >= 45 && min < 60:
//         console.log("четверта чверть години")
//         break;
//     default: console.log("ви не потрапили в діапазон години")
//     }

// const min = 18
// if (min < 15) {
//     console.log("перша чверть години")
// } else if (min < 30) {
//     console.log("друга чверть години")
// } else if (min < 45) {
//     console.log("третя чверть години")
// } else if (min < 60) {
//     console.log("четверта чверть години")
// }
// else { console.log("ви не потрапили в діапазон години") }

// ============================================

//Якщо  число ділитися на 3 повертати fizz
// якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

// const num = 21
// for (let i = 1; i <= num; i += 1) {
//     if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz")
// }

// else if (i % 3 === 0) {
//     console.log ("fizz")
// }
// else if (i % 5 === 0) {
//     console.log ("buzz")
// }
// else {
//     console.log (i)
// }
// }
// +++++++++++++++++++++++++++++

//Дано рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const string = "abcde";
// if (string[0] === 'a') {
//     console.log("так");
// }
// else {
//   console.log("ні");
// }

/*const string = "abcde";
const message = string.startsWith("a") ? "yes" : "no";
console.log(message);
*//*
? Створіть масив genres з елементами Jazz і Blues.
? Додайте "rock'n'roll" до кінця.
? Виведіть у консоль перший елемент масиву.
? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
? Видаліть перший елемент та виведіть його в консоль.
? Вставте "Country" та "Reggy" на початок масиву.
 */


