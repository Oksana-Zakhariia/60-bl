// Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями
//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

const User = function ({ name, age, numbersOfPost }) {
    this.name = name;
    this.age = age;
    this.numbersOfPost = numbersOfPost;
   

}
User.prototype.getInfo = function () { return `Користувачеві ${this.name} ${this.age} років і в нього ${this.numbersOfPost} публікацій.` }

const poly = new User({ name: "Poly", age: 28, numbersOfPost: 24 });

console.log(poly.getInfo());