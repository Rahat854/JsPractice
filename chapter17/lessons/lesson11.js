// let p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 5000, 'one')
// })
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, 'two')
// })

// p1.then((v) => {
//     console.log(v)
// }).catch((e) => {
//     console.log(e)
// })

// p2.then((v) => {
//     console.log(v)
// }).catch((e) => {
//     console.log(e)
// })

function getIphone(isPassed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isPassed) {
                resolve('I have got an Iphone')
            } else {
                reject(new Error('You have failed'))
            }
        },2000)
    })
}

getIphone(false)
    .then((res) => {
        console.log(res)
    })
    .catch((e) => {
        console.log(e.message)
    })