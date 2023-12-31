let arr = [7, 4, 4.8 , 34, 8, 6, 9, 2, 1, 70,3]
function myFind(arr1,cb) {
    for(let i = 0; i < arr.length; i++) {
        if(cb(arr1[i])) { // cb(9)
            return arr1[i]
        }
    }
}
let result = myFind(arr, function(value) {
    return value === 9
})

// let result = arr.find(function(value) {
//     return value === 34
// })

// let result = arr.findIndex(function(value) {
//     return  value === 34
// })
console.log(result)