// Set Method() 
let s = new Set()
s.add("hello").add("goodbye")
s.size === 2
s.has("hello") === true
for (let key of s.values()) // insertion order
    console.log(key)

//    

let m = new Map()
let q = Symbol()
m.set("hello", 42)
for (let [ key, val ] of m.entries())
    console.log(key + " = " + val)