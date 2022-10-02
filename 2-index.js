
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
// const array = [7, 7, 7, 3, 5, 5, 5];
const array = [1, 2, 3, 4, 5, 6, 7];
// console.log(array.reverse());
for (let i = 0; i < array.length/2; i += 1) {
    // console.log(array[i]);
    const index = array.length - 1 - i 
    const template = array[i];
    array[i] = array[index];
    array[index] = template;
}
console.log(array);
// удачі всім! )))


