
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

// function makeWords(text) {
//     try {
//         let str = text.trim()
//         let words = str.split(' ')
//         return words
//     } catch(e) {
//         console.log('Please provide a valid text')
//     }
// }

// let words = makeWords(86)
// console.log(words)
class customError  extends Error {
    constructor(msg) {
        super(msg)

        if(Error.captureStackTrace)
            Error.captureStackTrace(this, customError)
    }

}
try {
    console.log('I am line 1')
    throw new customError('I am your Error')
    console.log('I am line 2')
    console.log('I am line 3')
} catch(e) {
    console.dir(e)
} finally {
    console.log('I am finally block')
}