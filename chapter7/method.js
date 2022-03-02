let obj = {
    x: 40,
    y: 60,
    z: 75
}

// console.log(Object.keys(obj)) // return object keys
// console.log(Object.values(obj))// return object values
// console.log(Object.entries(obj))// return object elements

let obj2 =Object.assign({},obj)
obj2.x = 200
console.log(obj)
console.log(obj2)
