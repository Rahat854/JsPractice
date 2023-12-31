// Closure is when a function is able to remember and access its scope even when that function executing
// outside it's lexical scope

//able to remember and access its scope
//when that function executing outside it's lexical scope

// function test() {
//     let msg = 'I am learning lexical scope and closure'
//     function sayMsg() {
//         console.log(msg)
//     }
//     sayMsg()
// }

function test() {
    let msg = 'I am learning lexical scope and closure'
    return function() {
        console.log(msg)
    }
}
let sayMsg = test() // function() { console.log(msg) }
sayMsg()
