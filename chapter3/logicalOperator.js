// && || !

// A  && B
//true && true = true
//true && false = false
//false && true = false
//false && false = false
// A  \\ B
//true \\ true = true
//true \\ false = true
//false \\ true = true
//false \\ false = false

let a = 10
let b = 20
let c = 30
let d = 40
if(a > b && c > d){
    console.log('A is greater than B and C is greate than D')
}
else{
    console.log('At least one condition is false')
}