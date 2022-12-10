// Extended Parameter Handling

// Default Parameter Handling.
function f(x,y=22,z= 27){
    return x+y+z
}
f(1) == 50  


// Rest Parameter

//The rest parameter syntax allows a function
// to accept an indefinite number of arguments as an array,

function sum(a1,a2,...a){
    return (a1,a2) * a
}
sum(2,3,4)  


// Spread operator 

var x = [1,"Welcome",2022]
var y = [2,"December",...x] 
function par(...y){
    return y
}
par()
var z = "Extended"
var chars = [...z]  // 
console.log(chars)

