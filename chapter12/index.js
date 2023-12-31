 let rect = {
     width : 500,
     height : 400,
     draw: function() {
         console.log('I am a rectangle')
         this.printProperties()
     },
     printProperties : function() {
         console.log('My width is ' + this.width)
         console.log('My height is ' + this.height)

     }
 }
 rect.draw()
// function drawBox() {
//     let width = document.getElementById('width').value
//     let height = document.getElementById('height').value
//     let color = document.getElementById('color').value
//     let canvas = document.getElementById('demo').style
//     canvas.width = width + 'px'
//     canvas.height = height + 'px'
//     canvas.backgroundColor = color
// }


let createRect = function(width, height) {
    return {
        width : width, // 10
        height : height, // 8
    
        draw: function() {
            console.log('I am a rectangle')
            this.printProperties()
        },
        printProperties : function() {
            console.log('My width is ' + this.width)
            console.log('My height is ' + this.height)
        }
    }
}
let rect1 = createRect(10,8)
rect1.draw()
let rect2 = createRect(29, 74)
rect2.draw()

// let Rectangle = function (width, height) {
//     this.width = width
//     this.height = height

//     this.draw = function() {
//         console.log('I am a rectangle')
//         this.printProperties()
//         console.log(this)
//     }
//     this.printProperties = function() {
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }
// }

// // let rect3 = new Rectangle(10, 8)
// // rect3.draw()

// // function myNew(constructor) {
// //     let obj = {}
// //     Object.setPrototypeOf(obj, constructor.prototype)
// //     let argsArray = Array.prototype.slice.apply(arguments)
// //     constructor.apply(obj, argsArray.slice(1))

// //     return obj
// //  }

// //  let rect4 = myNew(Rectangle,45, 23)
// //  rect4.draw()

// // let str = new String('str')
// // console.log('My String is ' + str)

// function test() {
//     console.log('something')
// }

// test()

// let Rect = Function('width', 'height', `this.width = width
// this.height = height

// this.draw = function() {
//     console.log('I am a rectangle')
//     this.printProperties()
//     console.log(this)
// }
// this.printProperties = function() {
//     console.log('My width is ' + this.width)
//     console.log('My height is ' + this.height)
// }`)
// let rect5 =  new Rect(4,5)
// console.log(rect5.draw())

// function myFunc(c, d) {
//     console.log(this)
//     console.log(this.a + this.b + c + d)
// }
// //call, Apply
// //Bind
// // myFunc.call({a:40 , b : 30},10, 5)
// // myFunc.apply({a:40 , b : 30},[10, 5])
// let testBind = myFunc.bind({a:7, b:3})
// testBind(5, 7)

//Pass by Value vs Pass by Reference
//Call by Value vs Pass by Reference

// let n = 10
// function change(n) {
//     n = n + 100
//     console.log(n)
// }
// change(n)
// console.log(n)

// let obj = {
//     a: 10,
//     b: 20
// }

// function changMe(obj) {
//     obj.a +=100
//     obj.b += 100
//     console.log(obj)
// }
// changMe(obj)
// console.log(obj)
// let Rectangle = function (width, height) {
//     this.width = width
//     this.height = height
//     let position = {
//         x: 56,
//         y: -100
//     }
//     let printProperties = function() {
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }.bind(this)
//
//     // this.getPosition = function() {
//     //     return position
//     // }
//
//     this.draw = function() {
//         console.log('I am a rectangle')
//         printProperties()
//         console.log('Position X = ' + position.x + ' Y = ' + position.y)
//     }
//     Object.defineProperty(this, 'position', {
//         get: function() {
//             return position
//         },
//         set: function(value) {
//             position = value
//         }
//     })
//
// }
//
// let rect7 = new Rectangle(7,9)
// rect7.draw()
// rect7.position = {
//     x: 456,
//     y: -123
// }
// console.log(rect7.position)