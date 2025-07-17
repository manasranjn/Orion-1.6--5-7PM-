const heading = document.getElementById("head")
// console.log(heading);

const paragraphs = document.getElementsByClassName("para")
// console.log(paragraphs);

const paraElements = document.getElementsByTagName("p")
// console.log(paraElements);

const email = document.getElementsByName("email")
// console.log(email);

const head = document.querySelector("#head")
// console.log(head);

const para = document.querySelector(".para")
// console.log(para);

const allPara = document.querySelectorAll(".para")
// console.log(allPara);

// const image = document.querySelector("img")
// console.log(image);

// let srcVal = image.getAttribute("src")
// console.log(srcVal);
// let width = image.getAttribute("width")
// console.log(width);

// image.setAttribute("src", "https://cdn.pixabay.com/photo/2025/01/05/10/07/daffodils-9311747_1280.png")
// image.setAttribute("id", "catImage")
// image.setAttribute("alt", "This is an Image")
// console.log(image);


const box = document.getElementById("box")
// box.setAttribute("class", "container")

// const greetElement = document.getElementById("greet")
// greetElement.innerText = "Good Evening Everyone"

const newElement = document.createElement("h1")
newElement.innerText = "This is a new Heading"
// console.log(newElement);

const newImage = document.createElement("img")
newImage.setAttribute("src", "https://cdn.pixabay.com/photo/2025/05/07/19/42/vase-9585892_1280.jpg")
newImage.setAttribute("width", "400")
console.log(newImage);

// box.append(newElement)
// box.prepend(newElement)
// box.before(newElement)
box.after(newElement)
box.append(newImage)

// box.remove()

// let name = prompt("Enter your name")
// console.log(name);

// alert("Warning....")