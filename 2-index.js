/*? Створіть масив genres з елементами Jazz і Blues.
? Додайте "rock'n'roll" до кінця.
? Виведіть у консоль перший елемент масиву.
? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
? Видаліть перший елемент та виведіть його в консоль.
? Вставте "Country" та "Reggy" на початок масиву.
 */
// const genres = ["Jazz", "Blues"];
// genres.push("rock'n'roll");
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// const deletedGenre = genres.shift();
// console.log(deletedGenre);
// // genres.splice(0, 0, "Country", "Reggy")
// genres.unshift("Country", "Reggy")
// console.log(genres);

/*
? Напиши скрипт пошуку найдовшого слова в масиві.
? Код має працювати для будь-якого масиву рядків.
? Використовуйте цикл для вирішення задачі.
*/
// const genres = ['Jazz', 'Blues', "rock'n'roll", 'Country', 'Reggy'];

// function fundLongestWord(arr) {
//     let longestWord = genres[0];
//     for (const genre of genres) {
//         if (genre.length > longestWord.length) {
//     longestWord = genre}
//     }
//     return longestWord;
// }
// console.log(fundLongestWord(genres));

//     let longestWord = genres[0];
//     for (const genre of genres) {
//         if (genre.length > longestWord.length) {
//     longestWord = genre}
//     }

// console.log(longestWord);

/*
? У нас є кілька масивів із зарплатами співробітників з
? різних відділів, потрібно порахувати загальну суму зарплат
*/

//  const managerSalaries = [1000, 1500, 2500, 4000, 5000];
//  const developersSalaries = [8000, 40000, 15000];

// // const allSalarys = managerSalaries.concat(developersSalaries);
// // let total = 0;
// // for (let i = 0; i < allSalarys.length; i += 1){
// //     total += allSalarys[i];
// // }

// // console.log(total)
// const allSalarys = [...managerSalaries, ...developersSalaries];
// console.log(allSalarys);
// const total = allSalarys.reduce((acc, item) =>
//     acc += item
// , 0)

/* Потрібно розвернути масив у зворотньому напрямку
 не використовуючи методів масива і не створюючи нові масиви
 */
// // const array = [7, 7, 7, 3, 5, 5, 5];
// const array = [1, 2, 3, 4, 5, 6, 7];
// // console.log(array.reverse());
// for (let i = 0; i < array.length/2; i += 1) {
//     // console.log(array[i]);
//     const index = array.length - 1 - i
//     const template = array[i];
//     array[i] = array[index];
//     array[index] = template;
// }
// console.log(array);
// // удачі всім! )))

/*Потрібно перевітири чи є речення палінром*/

// const str = 'Я несу гусеня';
//янесугусеня
// const str = 'Де помити мопед';
// const str = 'І була пані на палубІ';
// const str = 'Поліна неси Ром!';

// function isPalindrome(str) {
//   console.log(str);
//   const normalizeString = str.toLowerCase();
//   const replecedString = normalizeString.replaceAll(" ", "");
//   const arrayString = replecedString.split("");
//   const reversedArray = arrayString.reverse();
//   const reversedString = reversedArray.join("");
//   const palindrome = replecedString === reversedString;
//   console.log(palindrome);
// }
// isPalindrome("Поліна неси Ром!");

// function isPalindrome(str) {
//   console.log(str);
//   const normalizeString = str.toLowerCase().replaceAll(" ", "");
//   const reversedString = normalizeString.split("").reverse().join("");
//   const palindrome = normalizeString === reversedString;
//   console.log(palindrome);
// }
// isPalindrome("І була пані на палубІ");


/*
? Напишіть функцію calcAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення.
? За умови, що усі аругменти будуть лише числами.
? Додай перевірку, що аргументами можуть бути не числа
? Потрібно порахувати середнє значення аргументів (чисел)
*/

// function calcAverage() {
//     let total = 0;
//     let count = 0;
//     for (let i = 0; i < arguments.length; i += 1) {
//         if (typeof arguments[i] !== 'number') {
//             continue;
//         }
//         total += arguments[i];
//         count += 1;
//         // console.log(total);
//     }
//     console.log(total / count);
//     // console.log(arguments);
// };
// calcAverage(1, 2, 3, 4, 5, 'a', 'b');