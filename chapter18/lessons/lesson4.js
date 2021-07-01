//Id, Class, Tag, Name

// let title = document.getElementById('title')
// console.log(title)

// let p = document.getElementsByClassName('lead')
// console.log(p)

// let t = document.getElementsByTagName('li')
// console.log(t)

// let n = document.getElementsByName('list-item-one')
// console.log(n)

let title = document.querySelector('#title')
console.log(title)
let p = document.querySelector('.lead')
console.log(p)

let p2 = document.querySelectorAll('.lead')
console.log(p2)

let t = document.querySelectorAll('li')
console.log(t)
let n = document.querySelector('[name ^= "list-item-one"]')
console.log(n)