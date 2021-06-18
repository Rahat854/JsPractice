let arr = [1, 2, 3]

// let sqrArr = arr.map(function(value, index, arr) {
//     // return Math.random() * 100
//     return value * value
// })

// console.log(arr)
// console.log(sqrArr)

function map(arr, cb) {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        let temp = cb(arr[i], i, arr)
        newArr.push(temp)
    }
    return newArr
}
// console.log(map(arr))
let qb = map(arr, function (value) {
    return value * value * value
})

let mten = map(arr, function(value) {
    return value * 10
})

console.log(arr)
console.log(qb)
console.log(mten)