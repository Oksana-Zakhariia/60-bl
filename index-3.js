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
// const cars = [
//   {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: 'Honda',
//     model: 'Accord',
//     type: 'sedan',
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: 'Mazda',
//     model: 'Mazda 6',
//     type: 'sedan',
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
// {
//     make: 'Mazda',
//     model: 'CX-9',
//     type: 'suv',
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: 'Toyota',
//     model: '4Runner',
//     type: 'suv',
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Sequoia',
//     type: 'suv',
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Tacoma',
//     type: 'truck',
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'F-150',
//     type: 'truck',
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
// {
//     make: 'Ford',
//     model: 'Fusion',
//     type: 'sedan',
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

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

/*
? Відфільтруємо масив, залишивши в ньому лише додатні числа:
*/

// const numbers = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
// const filterNumbers = numbers.filter((element) => {
//   if (element > 0) {
//      return true
//    }
//  })
// console.log(filterNumbers)

//  Відфільтруйте масив heroes за ключем об'єкта franchise.
// */

//  const heroes = [
//   { name: 'Batman', franchise: 'DC' },
//   { name: 'Ironman', franchise: 'Marvel' },
//   { name: 'Thor', franchise: 'Marvel' },
//   { name: 'Superman', franchise: 'DC' },
// ];


// const newKeys = heroes.filter(({ franchise }) => franchise === 'DC')
    
// const findFranchise = (array, value) => {
//     return array.filter(({ franchise }) => franchise === value)
    
//   }
  

// console.log(findFranchise(heroes,'Marvel'))



const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

/*
? Нехай функція filterByPrice повертає масив автомобілів ціна яких
? менше ніж значення параметра threshold.
*/
// const filterByPrice = (array, threshold) => {
//   return array.filter((element) => {
//     if (element.price < threshold) {
//       return true;
//     }
//   });
// };
// console.log(filterByPrice(cars, 25000));

// const filterByPrice = (array, threshold) => {
// return array.filter(({price}) =>  price < threshold);};
// console.log(filterByPrice(cars, 25000));
// *
// ? Нехай функція getCarsWithDiscount повертає масив моделей автомобілів властивість onSale яких true.
// */

// const getCarsWithDiscount = (array) => {
//     return array.filter(({onSale}) => onSale ).map(({model})=> model)
// }
// console.table(getCarsWithDiscount(cars));


const numbers = [1, 2, 3, 4, 61, 19, 10, 11, 20, 25, 74, 35, 92, 5, 27, 2, 41, 100, 1000, 4, 105, 010, 7, 3, 75, 1, 19, 10, 11, 20, 25, 2, 5, 27, 2, 41];
  
// const uniqNumbers = (array) => {
//     return array.filter((element, index, array) => array.indexOf(element) === index)
// }
  
// console.log(uniqNumbers(numbers));


// const uniqNumbers = (array) => {
//   return array.reduce((acc, element) => {
//     if (!acc.includes(element)) {
//       acc.push(element)
//     } return acc;
      
//   }, [])
// }

// console.log(uniqNumbers(numbers));

// const uniqNumbers = (array) => {
//   return array.reduce((acc, element) => !acc.includes(element) ? [...acc, element]:  acc, [])
// }

// console.log(uniqNumbers(numbers));
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
// const calcularorTags = tweets.flatMap(({tags}) => tags
  
// ).reduce((acc, element) => {
//   if (acc[element]) {
//     acc[element] = acc[element] += 1;
    
//   }
//   else {
//     acc[element]=1
//   }
//   return acc;
// },{})
// console.log(calcularorTags)
// const calcularorTags = tweets.flatMap(({tags}) => tags
  
// ).reduce((acc, element) => ({...acc, [element]:acc[element] ? acc[element] += 1 : 1}) ,{})
  

// console.log(calcularorTags)