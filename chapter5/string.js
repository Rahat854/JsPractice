//chapter 5
//string in Js
//what is string?

// 'string' "rahat kabir"
// ['s', 't', 'r', 'i', 'n', 'g']

// let str = 'Something' //string literal
// let str2 = String(Something)// string constructor

// let n = 10
// //let str = n.toString()

// let m = 10
// str = String(n)
// console.log(str)

// Escape Notation

// let str = 'This is a \nString'
// console.log(str)

// String Comparison
// let a = 'abc'
// let b = 'bcd'
// //lexico Graphical 
// console.log(a<b)
// console.log('001' === 1)

// let a = 'I am '
// let b = 'Rahat Kabir'
// let c = a.concat(b) 
// // let d = c.substr(5)
// // console.log(d)
// console.log(c.charAt(0))
// console.log(c.startsWith('I'))
// console.log(c.endsWith('r'))
// console.log('abc'.toUpperCase())
// console.log('ABC'.toLowerCase())
// console.log('    fsdsfsddsf     '.trim())
// console.log(c.split(' '))

let str = 'Rahat Kabir'
let length = 0
while(true){
    if(str.charAt(length) === ''){
        break
    } else {
        length++
    }
}

console.log(str.length)