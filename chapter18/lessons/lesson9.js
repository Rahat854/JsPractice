let li = createElement('li', 'list-group-item','Four')


let list = document.getElementById('list')
list.appendChild(li)

let p1 = createElement('p', 'lead', 'I am Rahat Kabir Dhrubo')
let p2 = createElement('p', 'lead','I am Rahat Kabir Dhrubo' )

let div = createElement('div')
append(div,[p1,p2])
console.log(div)

list.insertAdjacentElement('afterend',div)
let container = document.getElementById('cont')
container.appendChild(div)

function append(parent,children) {
    children.forEach(child => parent.appendChild(child))
}

function createElement(tagName, className, innerHTML) {
    let tag = document.createElement(tagName)
    tag.innerHTML = innerHTML || ''
    tag.className = className || ''
    return tag
}

//Remove Element and update
let firstChild = list.firstElementChild

setTimeout(() => {
    firstChild.innerHTML = firstChild.innerHTML + ' (Modified)'
    firstChild.classList.add('text-success')
    firstChild.style.background = 'black'
}, 5000);
// setTimeout(() => {
//     list.lastChild.remove()
// }, 3000);

let lastItem = list.lastElementChild.cloneNode(true)
lastItem.innerHTML = 'Five'
list.append(lastItem)