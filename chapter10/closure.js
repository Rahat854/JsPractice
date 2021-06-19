// Closure is when a function is able to remember and access it's scope even when that function executing outside outside it's lexical scope

//able to remember and access it's scope
//when that function executing outside outside it's lexical scope

// function test() {
//     let msg = 'I am learning lexical scope and closure'
//     function sayMsg() {
//         console.log(msg)
//     }
//     sayMsg()
// }

// function test() {
//     let msg = 'I am learning lexical scope and closure'
//     return function() {
//         console.log(msg)
//     }
    
// }
 
// let sayMsg = test()
// sayMsg()

for(let i = 1; i <= 5; i++) {
    (function (n) {
        setTimeout(function() {
            console.log(n)
        }, 1000 * n )
    }) (i)
   
}