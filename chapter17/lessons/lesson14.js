// function myPromise() {
//     return Promise.resolve('Test value')
// }

// console.log(myPromise())

// async function test() {
//     return 'test'
// }
// test().then(v => alert(v))

// let p1 = new Promise(resolve => {
//     setTimeout(resolve, 5000,'test value')
// })

// async function myAsync() {
//     // p1.then(v => alert(v))
//     let v = await p1
//     console.log('test')
// }
// myAsync()

// async function fetchData() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users')
//     let data = await response.json()
//     let names = data.map(u => u.name)
//     console.log(names)
//     } catch(e) {
//         console.log(e.message)
//     }
// }

// fetchData()

let promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]

async function promiseAll() {
    let result = await Promise.all(promises)
    console.log(result)
}
promiseAll()