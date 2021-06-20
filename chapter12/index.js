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

 let rect = {
    width : 100,
    height : 50,

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

let rect2 = {
    width : 10,
    height : 50,

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

let rect3 = {
    width : 10,
    height : 5,

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