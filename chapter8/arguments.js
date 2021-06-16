// function add(a, b){
//     let result = a + b
//     console.log(result)
// }
// add(10, 20)
// add(500, 700)
// function sub(a, b){
//     let result = a - b
//     console.log(result)
// }
// sub(10, 20)
// sub(500, 700)
// let arr1 = [1,2,3]
// let arr2 = [4,5,6, 20]
// let arr3 = [7,8,9, 5, 8]

// let sum1 = 0
// for(let i = 0; i<arr1.length;i++){
//     sum1 += arr1[i]
// }
// console.log(sum1)
// let sum2 = 0
// for(let i = 0; i<arr2.length;i++){
//     sum2 += arr2[i]
// }
// console.log(sum2)
// let sum3 = 0
// for(let i = 0; i<arr3.length;i++){
//     sum2 += arr3[i]
// }
// console.log(sum3)
// function sumOfArray(arr){
//     let sum = 0
//     for(let i = 0; i<arr.length;i++){
//     sum += arr[i]
// }
// console.log(sum)
// }
// sumOfArray(arr1)
// sumOfArray(arr2)
// sumOfArray(arr3)

function test(a, b, c) {
    // console.log(arguments)
    // console.log(JSON.stringify(arguments))
    // console.log(typeof a)
    for(let i = 0;i <arguments.length; i++){
        console.log(arguments[i])
        console.log(JSON.stringify(arguments[i]))
    }
}
test(10,20,40)
