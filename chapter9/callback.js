function sample(a, b, cb) { // a = 5, b = 8, cb = function (c, d) { return c - d }
    let c = a + b // 5 + 8 = 13
    let d = a - b // 5 - 8 = -3
    return cb(c, d);  // cb(13, -3)
}

// function sum(a, b) { // a = 13, b = -3
//     return a+b; // 13 + -3 = 10
// }
// let result = sample(5, 8, sum) // sum is a callback function
// console.log(result) // 10


// let result2 = sample(5,8, function(m, n) { // m = 13, n = -3
//     return m-n // 13 - -3 = 16
// })
//
// console.log(result2)

let result3 = sample(5, 8, function(c, d) { // c = 13, d = -3
    return c * d // 13 * -3 = -39
})

console.log(result3)