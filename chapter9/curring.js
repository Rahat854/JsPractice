function add(a, b, c) {
    return a + b + c
}
//add(41, 52, 63)

function curring(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

let result = curring(5)(10)(15)
console.log(result)