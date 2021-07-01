const URL = 'https://jsonplaceholder.typicode.com/posts'

let postForm = document.getElementById('post-form')
let posts = document.getElementById('posts')

postForm.addEventListener('submit', function(e) {
    e.preventDefault()
    
    let title = this.title.value || undefined
    let body = this.body.value || undefined

    if(title && body) {
        let postObj = {
            userId : 100,
            title,
            body
        }
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type' : 'Application/JSON'
            },
            body: JSON.stringify(postObj)
        })
            .then(response => response.json())
            .then(post => {
                let item = listItemGenerator(post)
                posts.appendChild(item)
                this.reset()
            })
            .catch(e => console.log(e.message))
    } else {
        alert('Please Provide Every details')
    }
})

function listItemGenerator(item) {
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = `${item.id}. ${item.title} By User Id -${item.userId}`

    return li
}

//canvas
//SVG
//Drag and Drop
// Transitions
// Location
//Audio, video
//Speech Recognition
// web socket
// Local storage, Cookies and Browser database