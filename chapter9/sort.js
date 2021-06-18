person = [
    {
        name: 'A',
        age: 24
    },
    {
        name: 'B',
        age:26
    },
    {
        name: 'C',
        age:19
    },
    {
        name: 'D',
        age: 21
    }
]

let arr = [4, 8, 1, 6, 7, 9, 9, 4, 36, 53, 443, 123 , 1, 1, 1]
// arr.sort()
// console.log(arr)

// person.sort()
// console.log(person)

arr.sort(function(a,b) {
    if(a > b) {
        return 1
    } else if( a < b) {
        return -1
    } else {
        return 0
    }
})
console.log(arr)

person.sort(function(a, b) {
    if(a.age > b.age) {
        return 1
    } else if (a.age < b.age) {
        return -1
    } else {
        return 0
    }
})
console.log(person)

let res1 = arr.every(function(value) {
    return value >= 0
})
console.log(res1)

let res2 = arr.some(function(value) {
    return value < 0
})
console.log(res2)