
let n = Number.parseInt('78')
console.log(n)

function changToInt(v) {
    let result = Number.parseInt(v)
    if(!result) {
        return 'Please Provide a value which is able to covert to integer'
    }
    return result
}

let result = changToInt('Rahat')
console.log(result)

function makeWords(text) {
    try {
        let str = text.trim()
        return str.split(' ')
    } catch(e) {
        return 'Please provide a valid text'
    }
}
let words = makeWords(123)
console.log(words)

try {
    throw new Error('I am your Error')
} catch(e) {
    console.log(e)
} finally {
    console.log('I am finally block')
}