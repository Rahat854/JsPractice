function extend(Parent,child) {
    child.prototype = Object.create(Shape.prototype)
    child.prototype.constructor =  child
}

function Shape(color) {
    this.color = color
}

Shape.prototype.common = {
    common : function() {
        console.log('I am a common Method')
    }
}

function Square(width,color) {
    Shape.call(this, color)
    this.width = width
}
extend(Shape, Square)
Square.prototype.draw = function() {
        console.log('Drawing')
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