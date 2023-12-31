let arr = [1, 2, 3, 4]

let sqrArr = arr.map(function(value) { // value = 1, 2, 3, 4
    return value * value * value // 1 * 1 * 1 = 1, 2 * 2 * 2 = 8, 3 * 3 * 3 = 27, 4 * 4 * 4 = 64
})

console.log(sqrArr) // [ 1, 8, 27, 64 ]