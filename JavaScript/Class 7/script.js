// console.log(window);
const button = document.getElementById("btn")
const heading = document.getElementById("head")
button.onclick = (e) => {
    console.log("Button Clicked");
    heading.style.color = "blue"
    console.log(e);
    console.log(e.type);
    console.log(e.target);

}

function sayHello() {
    console.log("Add Event Listner");

    heading.innerText = "Good Evening";
    heading.style.backgroundColor = "green"
}

const input = document.getElementById("input")
input.onchange = (e) => {
    console.log(e.target.value);

}

const eventBtn = document.getElementById("event")
eventBtn.addEventListener("click", sayHello)

// setTimeout(() => {
//     console.log("Event Listner removed");

//     eventBtn.removeEventListener("click", sayHello)
// }, 3000)


class Example {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log(`My name is ${this.name}, and my age is ${this.age}`);
    }
}
const person1 = new Example("Rishabh Kumar", 20)
// console.log(person1);
// person1.greet()
// console.log(person1.name);

class Animal {
    constructor(name) {
        this.name = name
    }
    makeSound() {
        console.log(`${this.name} makes some sound`);
    }
}

class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} barks`);

    }
}
const dog2 = new Animal("Tommy")
const dog1 = new Dog("Sibu")
dog1.makeSound()
dog2.makeSound()