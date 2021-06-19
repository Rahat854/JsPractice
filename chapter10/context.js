// Execution Context

function a() {
    b()
    console.log('I am a function')
}

function b() {
    d()
    console.log('I am b function')
}

function c() {
    console.log('I am c function')
}

function d() {
    c()
    console.log('I am d function')
}

let x = 100

a()
console.log('I am Global')

//Execution of D function context
//execution OF B function context
//Execution of A function context
//Execution of global context