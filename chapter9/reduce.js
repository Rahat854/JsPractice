let arr = [67, 2, 45, 4, 5]

// let sum =  arr.reduce(function(prev,curr) {
//     return prev + curr
// }, 100)

// let max =  arr.reduce(function (prev,curr) {
//     return Math.max(prev, curr)
// })

// console.log(sum)
// console.log(max)

function myReduce(arr, cb, acc) {
    for(let i = 0; i < arr.length; i++) {
        acc = cb(acc, arr[i])
    }
    return acc
}

let sum = myReduce(arr, function(prev,curr) {
    return prev + curr
}, 0)
let max = myReduce(arr, function(prev,curr) {
   return Math.max(prev,curr)
}, 0)
let min = myReduce(arr, function(prev,curr) {
    return Math.min(prev,curr)
},arr[0])
console.log(sum, max, min)