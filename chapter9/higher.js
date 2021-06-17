function add(a,b) {
    return a+b
}

function manipulate(a,b, func) {
    let c = a + b
    let d = a - b

    // function multiply() {
    //     let m = func(a, b)
    //     return c*d*m
    // }
    return function () {
        let m = func(a, b)
        return c*d*m
    }
}
let multiply = manipulate(3, 4, add)
console.log(multiply())