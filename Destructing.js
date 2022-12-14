//   Destructing Assignments  

const i = [1,2,3,4]
const [j,k] = i 
console.log(i,j,k) 

//  object Binding Destructor 

const obj = {t : "123" , v : "456"}
const {t,v}  = obj 
console.log(v)
console.log(obj)

// Assignment Destructor
 
const numbers = [];
const fj = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = fj);
console.log(numbers)
console.log(fj)
//  Reference destructor

 const props =  { name : "Muhammed" , prefix : "Mr" } ;  let {name,prefix} = props ; 
 console.log(prefix + " "+ name)
 console.log(props)

// Parameter Context Matching

function f ([ name, val ]) {
    console.log(name, val)
}
function g ({ name: n, val: v }) {
    console.log(n, v)
}
function h ({ name, val }) {
    console.log(name, val)
}
f([ "bar", 42 ])
g({ name: "foo", val:  7 })
h({ name: "bar", val: 42 })

//fail soft Destructing 

var x = [66,"Fail Soft"]
var [w,y,z] = x 
console.log(x)
console.log(w === x[0])
console.log(z === undefined)

// Short Hand Destructing  

const u = "Welcome"
const l = "to"
const b =  "Short hand object destructing"

const dest = {u,l,b}
console.log(dest)

