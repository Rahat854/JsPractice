function greet(msg) {
    function greetings (name) {
        return msg + ', ' + name + '!'
    }

    return greetings
}


let gm = greet ('Good Morning')
let gn = greet ('Good Night')
let hello = greet('Hello')
// console.log(typeof gm)
let msg = gm('Rahat Kabir Dhrubo')
console.log(msg)
console.log(gn(' Rahat'))
console.log(hello('Kabir'))

function base(b) {
    return function(n) {
        let result = 1
        for(let i = 0; i< b; i++) {
            result *= n
        }
        return result
    }
}
let base10 = base(10)
console.log(base10(2))

let base5 = base(5)
console.log(base5(2))
console.log(base5(3))
console.log(base5(5))