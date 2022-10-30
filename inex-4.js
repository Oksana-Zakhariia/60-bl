// Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями
//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

// const User = function ({ name, age, numbersOfPost }) {
//     this.name = name;
//     this.age = age;
//     this.numbersOfPost = numbersOfPost;
   

// }
// User.prototype.getInfo = function () { return `Користувачеві ${this.name} ${this.age} років і в нього ${this.numbersOfPost} публікацій.` }

// const poly = new User({ name: "Poly", age: 28, numbersOfPost: 24 });

// console.log(poly.getInfo());



// Напиши клас Client який створює об'єкт
//з властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email


// class Client {
//     #login;
//     #email;

//     constructor({ login, email }) {
//         this.#login = login;
//         this.#email = email;
//     }

//      get login() {
//          return this.#login;
//         }

//     set login(newLogin) {
//         this.#login = newLogin;
//     }

//        get email() {
//          return this.#email;
//         }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }

// const mango = new Client({ login: "Mango", email: "mango@mail.com" })

// console.log(mango);
// console.log(mango.login);
// mango.login = "Poly";
// console.log(mango.login);

// console.log(mango.email);
// mango.email = "poly@mail.com";
// console.log(mango.email);
