//Inheritance

// function Person(name) {
//     this.name = name
// }
// let p1 = new Person('Rahat Kabir')
// console.log(p1)

var person = {
    name : 'Rahat Kabir'
}
// console.log(person)

// for( i in person) {
//     console.log(i)
// }
// console.log(Object.keys(person))

// let descriptor = Object.getOwnPropertyDescriptor(person,'name')
// console.log(descriptor)

// let baseObj = Object.getPrototypeOf(person)
// let descriptor = Object.getOwnPropertyDescriptor(baseObj,'toString')
// console.log(descriptor)
Object.defineProperty(person,'name', {
    enumerable : false,
    writable : false,
    configurable : false,
    value : 'Rahat Kabir Dhrubo'
})

