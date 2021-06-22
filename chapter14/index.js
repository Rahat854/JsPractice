function Shape() {

}

Shape.prototype = {
    common : function() {
        console.log('I am a common Method')
    }
}

Square.prototype = Object.create(Shape.prototype)

function Square(width) {
    this.width = width
}

Square.prototype.draw = function() {
        console.log('Drawing')
    }



let shape = new Shape()
var sqr = new Square(45)

//shape ->Shape -> Object
//sqr -> Square -> Object

//sqr -> Square -> Shape -> Object

function Circle() {

}

Circle.prototype = Object.create(Shape.prototype)