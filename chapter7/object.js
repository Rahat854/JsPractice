//object in Javascript

// let obj = {}
// // console.log(obj)
// // console.log(typeof obj)
// obj.x = 10
// console.log(obj)
// let point ={
//     x:10,
//     y:20
// }

// point.z = 30
// console.log(point)

// let obj = Object()
// obj.a = 10
// console.log(obj)
// let obj2 = new Object()
// obj2.b = 20
// console.log(obj2)
let point = {
    x: 10,
    y: 20,
    z: 15
}
// //dot notation
console.log(point.x)
// console.log(point.x)
// console.log(point.x + point.z)
// //array notation
// console.log(point['x'])
// console.log(point['z'])
// let show = 'x'
// console.log(point[show])
point.x = 45
point.a = 16
console.log(point)
console.log(point.d)

point['y'] = 100
let prop = 'z'
point[prop] = 55
console.log(point)


point.a = undefined
console.log(point)

delete point.a
console.log(point)