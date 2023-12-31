// Objective: Understanding hoisting

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to
// the top of their scope before code execution.

let a = 100
let newPrint = print
function print(a) {
    console.log(a)
}
print(10)
newPrint(45)
print(a) // 100

//Creational Phase
// a = undefined
// newprint = undefined
// print = ref

//Executional Phase
// a = 100
// newprint = reference
