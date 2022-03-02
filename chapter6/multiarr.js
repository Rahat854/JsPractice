//Multi dimensional Array
let arr = [
    [78, 72, 80,90],
    [78, 72, 80,90],
    [78, 72, 80,90]

]
// console.log(arr[0][0])
// console.log(arr[1][1])
for(let i =0; i<arr.length;i++){
    for(let j = 0; j < arr[i].length; j++){
        console.log('Element ' + i + ' : ' + arr[i][j])
    }
}

console.log(arr.flat(Infinity));
// convert all depth of array in a single array