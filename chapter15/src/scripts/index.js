import '../styles/index.scss'
// let s = `Rahat
// kabir
//         dhrubo`
// console.log(s.trim())

// let age = 13
// let name = 'Rahat kabir'

// console.log('My name is ' + name + ' and I am ' + age + ' years old')
// console.log(`My name is ${name} and I am ${age} years old. i am ${age < 18 ? 'not' : ''} adult`)

// console.log(name.padStart(15,'*'))

// console.log(name.padEnd(15,'a'))
// console.log('s'.repeat(23))

//var vs let vs const

// if(true) {
//     let a = 10
// }
// // console.log(a)

// for(let i =  0; i< 10; i++) {

// }
// // console.log(i)
// (function() {
//     var abc = 'ABC'
//     console.log(abc)
// })
// console.log(abc)

// function add(a, b) {
//     return a + b
// }
// let sum  =  function(a,b) {
//     return a + b
// }

// let add =(a,b) => a + b
// console.log(add(45, 50))

// let sqr = (x) => x*x
// console.log(sqr(6))

// function testMe() {
//     console.log(this)
// }
// testMe.call({})
// let obj = {
//     name: 'Rahat kabir',
//     print : () => {
//         console.log(this)
//     }
// }
// obj.print()

// let obj = {
//     name: 'rahat kabir',
//     print: function() {
//         setTimeout(() => {
//             console.log(this)
//             console.log(`Hello, ${this.name}`)
//         },1000)
       
//     }
// }
// obj.print()

// function sqr(n = 1) {
//     return n*n
// }
// console.log(sqr())

function greet(msg = 'Hello', name = 'Rahat Kabir Dhrubo') {
    console.log(`${msg}! ${name}`)
}
greet()
