let arr = [67, 2, 45, 4, 5]

let sum =  arr.reduce(function(prev,curr) {
    return prev * curr
}, 1)

let max =  arr.reduce(function (prev,curr) {
    return Math.min(prev, curr)
})
console.log(sum)
console.log(max)


