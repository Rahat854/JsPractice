let x = 55
function test() {
    x = 45
    function nested() {
        x = 23
        console.log(x)
    }
    nested()
    console.log(x)
}
test()
console.log(x)
