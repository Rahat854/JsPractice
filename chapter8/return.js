function addAll() {
    let sum =0
    for(let i = 0; i<arguments.length;i++){
        sum += arguments[i]
    }
    return sum
}

let result = addAll(1,2,3)
console.log(result)
function person(name, email) {
    return {
        name: name,
        email: email
    }
    console.log('It will never be shown')
}

let p1 =person('Rahat Kabir Dhrubo', 'rahatkabir20@gmail.com')
console.log(p1)