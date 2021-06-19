let x = 55

function test() {
    let x = 45
    // console.log(x)

    function nested() {
        // let y = 65
        console.log(x)
    }
    // console.log(y)
    nested()
}

test()