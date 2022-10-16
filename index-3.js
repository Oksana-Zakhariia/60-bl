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

const each = (array, callback) => {
    return array.map(callback)
    

    
}
const add = (a) => a * 2
console.log(each([1, 8, 5], add ));