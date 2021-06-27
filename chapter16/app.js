
// let n = Number.parseInt('45')
// console.log(n)

// function changToInt(v) {
//     let result = Number.parseInt(v)
//     if(!result) {
//         return 'Please Provide a value which is able to covert to integer'
//     }

//     return result
// }

// let result = changToInt('86')
// console.log(result)

function makeWords(text) {
    try {
        let str = text.trim()
        let words = str.split(' ')
        return words
    } catch(e) {
        console.log('Please provide a valid text')
    }


    // return words
}

let words = makeWords(86)
console.log(words)