// let a = 'abc'
// if(true){
//     if(true) {
//         let b = 'I am b'
//     }
// }

// console.log(b)

function x() {
    let a = 20
    function y() {
        let a = 10
        console.log(a)
    }
    console.log(a)
    y()
}
x()

function test(n) {
    function a() {
        return n%3 === 0
    }
    function b() {
        return n%5 === 0
    }
    if(a() && b()) {
        console.log(n + ' is devisible by both 3 and 5')
    } else {
        console.log('Not a valid number')
    }
}
test(15)