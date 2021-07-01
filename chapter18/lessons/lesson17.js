let Name = document.getElementById('name')

Name.addEventListener('keypress', function(event) {
   if(event.key === 'Enter') {
       document.getElementById('show-name').innerHTML = `Your Name
       is ${event.target.value}`
       event.target.value = ''
   }
})