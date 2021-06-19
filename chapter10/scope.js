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

let a =11
function A() {
    let b = 12
    function B() {
        let c = 23
        console.log(c)
    }

    function C() {
        let d = 56
        console.log(d)
    }
    console.log(b)
    D()
    B()
    C()
}

function D(n) {
    return n+a
}

// A -> a,b, B(), C(), D()
// B -> a,b,c, B(), C(), D()
// C -> a,b,d, B(), C(), D()
// D -> a,n, A()