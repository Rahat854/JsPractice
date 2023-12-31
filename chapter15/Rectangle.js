import Shape from './Shape.js'
import {times} from './func.js'
class Rectangle extends Shape{
    constructor (color,width, height) {
        super(color)
        this.width = width
        this.height =  height
    }
    draw() {
        console.log('Drawing a rectangle')
    }
    calculate() {
        return times(this.width, this.height)
    }
}
export default Rectangle