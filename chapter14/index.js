function extend(Parent,child) {
    child.prototype = Object.create(Shape.prototype)
    child.prototype.constructor =  child
}

function Shape(color) {
    this.color = color
}

Shape.prototype.common = function() {
        console.log('I am a common Method')
    }

function Square(width,color) {
    Shape.call(this, color)
    this.width = width
}
extend(Shape, Square)
Square.prototype.draw = function() {
        console.log('Drawing')
    }
Square.prototype.common = function() {
        console.log('I am calling From Square and I have Overridden')
    }
    
// let shape = new Shape()
var sqr = new Square(45, 'Green')

//shape ->Shape -> Object
//sqr -> Square -> Object

//sqr -> Square -> Shape -> Object

function Circle(radius, color) {
    Shape.call(this, color)
    this.radius = radius
}

extend(Shape, Circle)

Circle.prototype.common = function() {
    // Shape.prototype.common.call(this)
    console.log('I am calling From Circle and I have Overridden')
}

let c = new Circle(4,'red')

let s = new Shape('Purple')

let shapes = [s, c, sqr]

for(let i of shapes) {
    i.common()
}