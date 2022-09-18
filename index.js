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
let userInput = Number(prompt('Введіть число'));
let total = 0;
while (userInput !== 0) {
    total += userInput
    userInput = Number(prompt('Введіть число'));
}
console.log(total)