//  // let rect = {
//  //     width : 100,
//  //     height : 50,



 
//  //     draw: function() {
//  //         console.log('I am a rectangle')
//  //         this.printProperties()
//  //         console.log(this)
//  //     },
//  //     printProperties : function() {
//  //         console.log('My width is ' + this.width)
//  //         console.log('My height is ' + this.height)
//  //     }
//  // }
 
//  // rect.draw()
 
//  // // rect.height = 100
 
//  // // rect.draw()
 
//  // function myFunc() {
//  //     console.log(this)
//  //     rect.printProperties()
//  // }
 
//  //  new myFunc()
 
//  //  let another = {
//  //      width : 47,
//  //      height : 56,
//  //      print : rect.printProperties
//  //  }
//  //  console.log(another.print)
//  //  another.print()


// // let createRect = function(width, height) {
// //     return {
// //         width : width,
// //         height : height,
    
// //         draw: function() {
// //             console.log('I am a rectangle')
// //             this.printProperties()
// //             console.log(this)
// //         },
// //         printProperties : function() {
// //             console.log('My width is ' + this.width)
// //             console.log('My height is ' + this.height)
// //         }
// //     }
// // }
// // let rect1 = createRect(10,8)
// // rect1.draw()
// // let rect2 = createRect(29, 74)
// // rect2.draw()

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