//?Logical operator Logical AND (&&), Logical OR (||), Logical NOT (!)
// console.log("Logical operator");

let first = true
let second = false
let third = true

// console.log(first && second); //f
// console.log(first && third); //t
// console.log(first || second); //t
// console.log(first || third); //t
// console.log(!first);  //f
// console.log(!second); //t

//! Comparision Operator
let a = 10
let b = 20
let c = 10
let d = "10"

// console.log(a == b);
// console.log(a == d);
// console.log(a === b);
// console.log(a === d);
// console.log(a != b);
// console.log(a != c);
// console.log(a !== b);
// console.log(a !== d);
// console.log(a !== c);
// console.log(a > b);
// console.log(a < b);
// console.log(a <= b);
// console.log(a >= b);

//?Unary operator
let val = 10

// console.log("Pre increment=", ++val);
// console.log("Post increment=", val++);
// console.log(val);
// console.log(--val);
// val++
// val--
// ++val
// console.log(val++);
// console.log(val);
// console.log("Pre Decrement= ", --val);
// console.log("Post Decrement= ", val++);
// console.log(val);

//! Conditional Statement
//? simple if
let age = 10
// if (age > 18) {
//     console.log("You can Vote");
// }

//? if..else
// if (age > 18) {
//     console.log("You can vote");

// } else {
//     console.log("You can't vote");
// }

//? else..if
let time = 12
// if (time < 11) {
//     console.log("Good Morning");
// } else if (time > 11 && time < 17) {
//     console.log("Good Afternoon");
// } else if (time > 17 && time < 21) {
//     console.log("Good Evening");

// } else if (time > 21 && time < 24) {
//     console.log("Good Night");
// } else {
//     console.log("Invalid time");
// }

//? switch case
// let value = 2
// switch (value) {
//     case 1:
//         console.log("Case 1");
//         break
//     case 2:
//         console.log("Case 2");
//         break
//     case 3:
//         console.log("Case 3");
//         break
//     default:
//         console.log("Default case");
//         break
// }

//! Loop in JS
//? for loop
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

//? while loop
let z = 0
// while (z < 20) {
//     console.log(z);
//     z++
// }

//? do-while loop
// do {
//     console.log(z);
//     z++
// } while (z < 10)

//? for-of loop
let arr = [10, 20, 30, 40, 50, 607, 80]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let element of arr) {
//     console.log(element);
// }

// let str = "Hello everyone"
// for (let s of str) {
//     console.log(s);
// }

//? for-in loop
let obj = {
    name: 'ABCD',
    age: 20,
    gender: "Male"
}
// console.log(obj.name);
// console.log(obj["gender"]);

for (let k in obj) {
    console.log(k);
    console.log(obj[k]);


}