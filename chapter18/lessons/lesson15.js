let btn = document.getElementById('btn')

// btn.onclick = function(e) {
//     alert('I am clicked')
// }

btn.addEventListener('click', function(e) {
   let item = list.lastElementChild.cloneNode(true)
   item.innerHTML = 'Newly Created Item'
   list.appendChild(item)
})

let list = document.getElementById('list');
//Event delegation Problem
// [...list.children].forEach(li => {
//     li.onclick = function(e) {
//        e.target.remove()
//     }
// })

list.addEventListener('click', function(e) {
    if(this.contains(e.target)) {
        e.target.remove()
    }
})

let box = document.getElementById('box')



box.addEventListener('mousemove', function(e) {
    document.getElementById('x-value').innerHTML = e.offsetX
    document.getElementById('y-value').innerHTML = e.offsetY
    if( e.offsetY === 50 && e.offsetX === 50 ) {
        alert('50 50')
    }
})