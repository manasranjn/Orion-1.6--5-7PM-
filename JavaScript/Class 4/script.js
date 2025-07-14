// console.log("Hello \n everyone");
// console.log("Hello \t everyone");

//! Template String
// let mark = 90
// let course = "B.Tech"
// let name = "ABCD"
// console.log("My name is", name, ", mark is", mark, "and my course is", course);
// console.log("name");
// console.log(`${name}`);
// console.log(`My name is ${name}, mark is ${mark} and my course is ${course}`);

//! String methods

let str = "  Lorem ipsum dolor Lorem sit amet consectetur adipisicing elit. Eligendi nostrum minima quos Lorem reprehenderit. Iusto Lorem sed itaque alias nam dicta minima ex, et similique iure? Eaque ex labore beatae laudantium in!  "
//? toUpperCase()
let upperStr = str.toUpperCase()
// console.log(upperStr);

//? toLowerCase()
let lowerStr = str.toLowerCase()
// console.log(lowerStr);

//? trim()
let trimmedStr = str.trim()
// console.log(trimmedStr);

//? slice()
let slicedStr = str.slice(1, 10)
// console.log(slicedStr);

//? indexOf()
// console.log(str.indexOf("Lorem"));

//? lastIndexOF()
// console.log(str.lastIndexOf("Lorem"));
// console.log(str.lastIndexOf("lorem"));

//? chatAt()
// console.log(str.charAt(10));

//? replace()
let replStr = str.replace("Lorem", "Hello")
// console.log(replStr);

//? replaceAll()
let replacedStr = str.replaceAll("Lorem", "Hi")
// console.log(replacedStr);

//? split()
// console.log(str.split("adipisicing elit."));

//? length
// console.log(str.length);

//! Functions in JS
//? Normal Function
function sum() {
    console.log(10 + 20);
}
// sum()

//* Without parameter
function addition() {
    return 10 + 20
}
let val = addition()
// console.log(val);

//* With Parameter
function add(a, b) {
    return a + b
}
let val2 = add(1, 2)
let val3 = add(100, 10)
// console.log(val2, val3);

//? Arrow Function
let sub = () => {
    console.log(100 - 30);

}
sub()

//? Anonymous Function
let sayHello = function () {
    console.log("Hello Everyone");
}
sayHello()