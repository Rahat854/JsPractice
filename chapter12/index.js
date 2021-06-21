 // let rect = {
 //     width : 100,
 //     height : 50,
 
 //     draw: function() {
 //         console.log('I am a rectangle')
 //         this.printProperties()
 //         console.log(this)
 //     },
 //     printProperties : function() {
 //         console.log('My width is ' + this.width)
 //         console.log('My height is ' + this.height)
 //     }
 // }
 
 // rect.draw()
 
 // // rect.height = 100
 
 // // rect.draw()
 
 // function myFunc() {
 //     console.log(this)
 //     rect.printProperties()
 // }
 
 //  new myFunc()
 
 //  let another = {
 //      width : 47,
 //      height : 56,
 //      print : rect.printProperties
 //  }
 //  console.log(another.print)
 //  another.print()


// let createRect = function(width, height) {
//     return {
//         width : width,
//         height : height,
    
//         draw: function() {
//             console.log('I am a rectangle')
//             this.printProperties()
//             console.log(this)
//         },
//         printProperties : function() {
//             console.log('My width is ' + this.width)
//             console.log('My height is ' + this.height)
//         }
//     }
// }
// let rect1 = createRect(10,8)
// rect1.draw()
// let rect2 = createRect(29, 74)
// rect2.draw()

let Rectangle = function (width, height) {
    this.width = width
    this.height = height

    this.draw = function() {
        console.log('I am a rectangle')
        this.printProperties()
        console.log(this)
    }
    this.printProperties = function() {
        console.log('My width is ' + this.width)
        console.log('My height is ' + this.height)
    }
}

// let rect3 = new Rectangle(10, 8)
// rect3.draw()

function myNew(constructor) {
    let obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    let argsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argsArray.slice(1))

    return obj
 }

 let rect4 = myNew(Rectangle,45, 23)
 rect4.draw()