// First look at choose

let b = 10

function a() {
    let x = 5
    console.log(b)

    return function() {
        console.log(x)
    }
}
var abc = a()
console.dir(abc)