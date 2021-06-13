//insert and remove element

var arr = [1, 2, 3, 4, 5, 6, 7, 8]

//insert 9 to index number 3

//arr[3] = 9
//arr.push(9)
//arr.unshift(9)

// arr.splice(3, 0, 9, 10)
//arr.pop(3)
//arr[3] = null
//arr.shift(3)
arr.splice(3,1)
console.log(arr)