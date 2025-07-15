//? Callback Function
// ()=>{

// }

let arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9]

// arr.forEach((a) => {
//     console.log(a);
// })

// let newArr = arr.forEach((item) => {
//     return item * 2
// })
// console.log(newArr);


//? map()
// let newArray = arr.map((item, i) => {
//     console.log(item);
//     console.log(`Value of i is ${i}`);
//     return item * 2
// })
// console.log(newArray);

//? filter()
// let evenArr = arr.map((item) => {
//     // if (item % 2 === 0) {
//     //     return item
//     // }
//     return item % 2 === 0
// })
// console.log(evenArr);

let evenArray = arr.filter((i) => {
    return i % 2 === 0
})
// console.log(evenArray);

//? reduce()
let sum = arr.reduce((add, item) => add += item, 0) // add = add+item
// console.log(sum);

//! DOM
// console.log(window);
console.log(document);
