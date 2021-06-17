//First Class Function
function add(a, b) {
    return a+b
}

// 1. A Function can be stored in a variable
let sum = add
console.log(sum(4,5))
console.log(typeof sum)

// 2. A Function can be stored in a Array
let arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](5,3))

// 3. A Function can be stored in an Object
let obj = {
    sum : add
}
console.log(obj)
console.log(obj.sum(7,9))

// 4. We can create Function as Need
setTimeout(function() {
    console.log('I have created........')
},100)
// 5. We can Pass Function as an Arguments

// 6. We can return Functions from Another Function

