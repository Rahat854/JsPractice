function add(a, b, c) { // a = 5, b = 6, c = 7
    return (a*5) + b + c // (5 * 5) + 6 + 7 = 18
}
console.log(add(5, 6, 7)) // 18

function curring(a) {// a = 5
    a = a * 5 // 5 * 5 = 25
    return function(b) { // b = 6
        return function(c) { // c = 7
            return a + b + c // 5 + 6 + 7 = 18
        }
    }
}

let result = curring(5)(6)(7)
console.log(result)