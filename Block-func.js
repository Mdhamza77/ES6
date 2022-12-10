{
    function block(n){
            if (n !== 0 ){
                  let x = 20
                   n = n * x
            }
            return n + ' This is Numbers type' 
    }
    block(6)
}
 
//  Because the function assigned to Variable x is out of block 

console.log(x)
{
     // Logs "foo"
    var x = foo();
    function foo() {
       return "foo";
    }
    console.log(x)
  }
 console.log(x)

 //
 let a = []
 for (let i = 0; i < a.length; i++) {
  let x = a[i]

 }

let callbacks = []
for (let i = 0; i <= 2; i++) {
  callbacks[i] = function () { return i * 2 }
}
console.log(callbacks[2]())
console.log(callbacks[1]() === 2)
  
  