
/*? Створіть масив genres з елементами Jazz і Blues.
? Додайте "rock'n'roll" до кінця.
? Виведіть у консоль перший елемент масиву.
? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
? Видаліть перший елемент та виведіть його в консоль.
? Вставте "Country" та "Reggy" на початок масиву.
 */
const genres = ["Jazz", "Blues"];
genres.push("rock'n'roll");
console.log(genres[0]);
console.log(genres[genres.length - 1]);
const deletedGenre = genres.shift();
console.log(deletedGenre);
// genres.splice(0, 0, "Country", "Reggy")
genres.unshift("Country", "Reggy")
console.log(genres);
