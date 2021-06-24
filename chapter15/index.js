
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

// function greet(msg = 'Hello', name = 'Rahat Kabir Dhrubo') {
//     console.log(`${msg}! ${name}`)
// }
// greet()

// function sum(... rest) {
//     return rest.reduce((a,b) => a+b)
// }

// console.log(sum(1,2,4,3,5,32,45))

// let a = [1,2,3]
// console.log(...a)

// let obj = {
//     a: 10,
//     b: 20,
//     c: 30
// }

// let obj2 = {
//     ...obj
// }

// let person = {
//     Name : 'Rahat Kabir Dhrubo',
//     email : 'rahatkabir20@gmail.com',
//     adress: {
//         city: 'Dhaka',
//         country : 'Bangladesh'
//     }
// }

// let {Name, email, adress: {city, country}} = person
// console.log(Name , email, city, country)

// let arr = [1,2,3,4,5]

// let [first, second, , ,last] = arr
// console.log(first, second, last)

// let obj = {
//     a: 10,
//     b: 20
// }

// console.log(Object.entries(obj))

// let objArr = [
//     ['a', 10],
//     ['b', 20]
// ]

// console.log(Object.fromEntries(objArr))

// let s1 = Symbol()
// let s2 = Symbol('test symbol')

// console.log(s1)
// console.log(s2)

// console.log(s1 === s2)

// let toss = {
//     HEAD: Symbol('HEAD'),
//     TAIL: Symbol('TAIL')
// }

const arr = [1, 2, 3]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// function createIterator(collection) {
//     let i = 0
//     return {
//         next() {
//             return {
//                 done : i >= collection.length,
//                 value: collection[i++]
//             }
//         }
//     }
// }
// let iterate = createIterator(arr)

// let iterate = arr[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// let str = 'TEXT'

// let iterateText = str[Symbol.iterator]()
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())

// for(let v of arr) {
//     console.log(v)
// }

// for(let v of 'Rahat Kabir') {
//     console.log(v)
// }
// let obj = {
//     start: 1,
//     end:5,
//     // [Symbol.iterator] : function() {
//     //     let currentValue = this.start
//     //     const self = this
//     //     return {
//     //         next() {
//     //             return {
//     //                 done: currentValue > self.end,
//     //                 value: currentValue > self.end ? undefined : currentValue++
//     //             }
//     //         }
//     //     }
//     // }
//     [Symbol.iterator] : function* () {
//         let currentValue = this.start
//         while(currentValue <= this.end) {
//             yield currentValue++
//         }
//     }
// }

// let iterate = obj[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// function* generate() {
//     yield 1
//     yield 2
//     yield 3
// }
// function* generate(collection) {
//     for (let i = 0; i < collection.length; i++) {
//         yield collection[i]
//     }
// }

// let it = generate(arr)
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// let obj = {
//     start: 1,
//     end: 10,
//     [Symbol.iterator] : function () {
//         let currentValue = this.start
//         const self = this
//         return {
//             next() {
//                 return {
//                     done: currentValue > self.end,
//                     value:currentValue > self.end ? undefined : currentValue++
//                 }
//             }
//         }
//     }
// }

// // for(let v of obj) {
// //     console.log(v)
// // }
// let iterate = obj[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())