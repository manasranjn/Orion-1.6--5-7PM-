// console.log("Hello World..");

//! Variable Keyword
//? var
var a = 10
// console.log(a);
var a = "Hi"
a = "Hello"
// console.log(a);

//? let
let b = 20
// let b // not allowed
b = "Good Evening"
// console.log(b);

//? const
const c = 0
// const c //not allowed
// c = 10 //not allowed

//! DataTypes
//? Primitive datatype
//* Number
let n = 10
// console.log(typeof n);

//* boolean
let x = true
// console.log(typeof x);

//* undefined
let u
// console.log(u);
// console.log(typeof u);

//* String
let s = "Hello"
let s2 = "12345678"
let s3 = "!@#$%^7899"
let s4 = "a"
// console.log(typeof s4);

//* null
let y = null
// console.log(y);
// console.log(typeof y);

//* Symbol
let z = Symbol(123456)
// console.log(typeof z);

//* BigInt
let big = BigInt(123456789876543212345678)
// console.log(typeof big);

//? Non-primitive or reference type
//* Array
let arr = [10, "Hi", true, undefined, null, [1, 2, 3, 45]]
// console.log(arr);
// console.log(arr[3]);

//* Object
let obj = {
    name: "ABCD",
    age: 20,
    subject: "JS",
    phone: 12345678,
}
// console.log(obj);
// console.log(obj.name);
// console.log(obj["subject"]);

const student = {
    name: "ABCD",
    age: 20,
    address: {
        city: "BBSR",
        state: "Odisha"
    }
}
// console.log(student.address.state);

//* function
function example() {
    console.log("This is a function");
}
// example()

//! Operator
//? Arithmetic Operator
let val1 = 4
let val2 = 3

// let addition = val1 + val2
// console.log("Addition=", addition);

// let sub = val1 - val2
// console.log("Subtraction=", sub);

// let multi = val1 * val2
// console.log("Multiplication", multi);

// let div = val1 / val2
// console.log("Division= ", div);

// let mod = val1 % val2
// console.log("Modulus=", mod);

// let expo = val1 ** val2
// console.log("Exponent= ", expo);

//? Assignment Operator (=,+=,-+,*=,/=,%=,**=)
let ab = 20
let xy = 90

// ab += xy // ab = ab+xy
// console.log(ab);

// ab -= 10 // ab = ab-10
// console.log(ab);

// ab *= 5
// console.log(ab);

// ab /= 4
// console.log(ab);

// ab %= 3
// console.log(ab);

// ab **= 6 // ab = ab ** 6
// console.log(ab);

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