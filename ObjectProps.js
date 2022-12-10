var x = 99 
var y = "Names of God"
obj = {x,y}
console.log(typeof y)
console.log(typeof x)
console.log(typeof obj)
 
//   Computed Property Names

let obj1 = {
    foo: "bar",
    [ "baz" + quux() ]: 42
}

function quux(){
    return " This Is Quix Function"
}
console.log(obj1)
console.log(obj1.foo)
console.log(obj1["baz" + quux()])

//  Method Properties  

obj2 = {
    fo (a, b) {
        return a + b
    },
    br (x, y) {
        return x * y
    },
    x (x, y) {
        return x ** y
    }
}

console.log(obj2.fo(11,22))
console.log(obj2.br(11,11))
console.log(obj2.x(3,3))