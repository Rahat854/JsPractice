import '../styles/index.scss'
// let s = `Rahat
// kabir
//         dhrubo`
// console.log(s.trim())

let age = 13
let name = 'Rahat kabir'

console.log('My name is ' + name + ' and I am ' + age + ' years old')
console.log(`My name is ${name} and I am ${age} years old. i am ${age < 18 ? 'not' : ''} adult`)

console.log(name.padStart(15,'*'))

console.log(name.padEnd(15,'a'))
console.log('s'.repeat(23))