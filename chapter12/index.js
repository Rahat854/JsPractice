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


let createRect = function(width, height) {
    return {
        width : width,
        height : height,
    
        draw: function() {
            console.log('I am a rectangle')
            this.printProperties()
            console.log(this)
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

