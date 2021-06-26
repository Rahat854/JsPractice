
import shape from './Shape.js'
class Rectangle extends shape{
    constructor (color,width, height) {
        super(color)
        this.width = width
        this.height =  height
    }
    draw() {
        console.log('Drawing a rectangle')
    }
    calculate() {
        return this.width * this.height
    }
} 

export default Rectangle