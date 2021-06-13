let arr = [4, 7, 2 , 6, 8, 55, 4, 55, 9, 89, 27]

let find =  10
let isFound = false
for(let i = 0; i< arr.length; i++){
    if(arr[i]===find){
        console.log('Data found in index number' + i)
        isFound =  true
        break
    }
}
if(!isFound){
    console.log('Data not Found')
}