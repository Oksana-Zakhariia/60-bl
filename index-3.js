/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву.
? Функція each повинна повернути новий масив, елементами якого будуть результати виклику колбека.
*/

// const each = (array, callback) => {
//     let arr = [];

//     for (let i = 0; i < array.length; i += 1){
//         // console.log(callback(array[i]));
//         arr.push(callback(array[i]))
//     }
//     return arr
// }
// const add = (a) => a * 2
// console.log(each([1, 8, 5], add ));

// const each = (array, callback) => {
//     return array.map(callback)
       
// }
// const add = (a) => a * 2
// console.log(each([1, 8, 5], add ));


/*
? Нехай функція getModels повертає масив цін (поле price) всіх автомобілів.
*/
const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
{
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
{
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// const allPrices = (array) => array.map(element => element.price)

// console.log(allPrices(cars));

/*
? Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із зміненим значенням властивості price
? залежно від переданої знижки.
*/

// const carsWithDiscount = (array, value) => {
//     return array.map(element => ({...element, price: Math.round(element.price / 100 * (100 - value))})) 
// }
 
// console.log(carsWithDiscount(cars, 10));

