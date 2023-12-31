const CryptoJS = require("crypto-js/core");
CryptoJS.AES = require("crypto-js/aes");
function Shape(color) {
    this.color = color;
}

Shape.prototype.common = function() {
    console.log('I am a common Method')
}
Shape.prototype.text = 'Shape Constructor'
let a = new Shape('Green')
console.log(Shape.prototype)
a.common()
console.log(a.text)
let b = new Shape('Red')
b.common()
console.log(b.text)
function Square(width,color) {
    Shape.call(this, color)
    this.width = width
}

let d = new Square(12, 'Purple')
console.log(d)
function extend(Parent,child) { // Parent = Shape, child = Square
    child.prototype = Object.create(Parent.prototype)
}
extend(Shape, Square)
Square.prototype.common = function() {
    console.log('I am calling From Square and I have Overridden')
}
function Circle(radius, color) {
    Shape.call(this, color)
    this.radius = radius
}
extend(Shape, Circle)
Circle.prototype.common = function() {
    console.log('I am calling From Circle and I have Overridden')
}
let c = new Circle(4,'red')
let s = new Shape('Purple')
let sqr = new Square(45, 'Green');
c.common();
s.common();
sqr.common();

function mixin(target, ...sources) {
    Object.assign(target,...sources)
}

let canWalk = {
    walk: function() {
        console.log('Walking...')
    }
}

let canEat = {
    eat: function() {
        console.log('Eating...')
    }
}

let canSwim = {
    swim: function() {
        console.log('Swimming...')
    }
}

// let person = Object.assign({}, canWalk, canEat)
// person.name = 'Rahat kabir Dhrubo'
function Person(name) {
    this.name = name
}
mixin(Person.prototype, canWalk, canEat)
let person = new Person('Rahat kabir Dhrubo')
console.log(person)

function Goldfish(name) {
    this.name = name
}
mixin(Goldfish.prototype,canEat,canSwim)
let fish = new Goldfish('star fish')
console.log(fish)

