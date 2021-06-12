//break statement

while(true){
    let rand = Math.floor(Math.random()* 10 + 1)
    if(rand === 9){
        console.log('Your loop is break')
        break
    }else{
        console.log('the random number is ' + rand)
    }
}