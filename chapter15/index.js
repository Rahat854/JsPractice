import Rectangle from './Rectangle.js'
import * as func from './func.js'


console.log(func.add(45, 10))

console.log(func.times(45, 10))

console.log(func.sub(45, 10))

console.log(func.div(45, 10))

let r = new Rectangle('purple',4, 5)
console.log(r)
r.draw()
console.log(r.calculate())