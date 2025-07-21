const box = document.getElementById("box")

// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => res.json())
//     .then((result) => {
//         console.log(result);
//         result.map((user) => {
//             const paragraph = document.createElement("p");
//             paragraph.textContent = user.title;
//             box.appendChild(paragraph);
//         });
//     })
//     .catch((err) => {
//         console.log(err);
//     });

const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    console.log(response);

    const data = await response.json()
    console.log(data);
}
// getData()

// console.log("1");
// console.log("2");

//! Hoisting

//? Variable Hoisting
// console.log(a);
// console.log(b);


let a = 1
var b = 2

// console.log(a);
// console.log(b);


//? Function Hoisting
// check() 
// example()

function example() {
    console.log("Hello");
}

const check = () => {
    console.log("Hi");
}

// check()
// example()

//! Operations on Objects in JS
const obj = {
    name: "ABCD",
    age: 20
}
// console.log(obj.age);
// console.log(obj["name"]);

obj.address = "BBSR"
// console.log(obj);

obj.name = "XYZ"
// console.log(obj);

delete obj.age
// console.log(obj);

//! sort()

let arr = [9, 3, 5, 8, 1, 4, 8, 3, 1, 4, 6, 9]
let ascOrd = arr.sort()
let ascndORder = arr.sort((a, b) => a - b)
console.log(ascndORder);

// console.log(ascOrd);

let descOrd = arr.sort((a, b) => b - a)
console.log(descOrd);