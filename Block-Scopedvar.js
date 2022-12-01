/*
let x = 122
function myfun() {
    if (x == 122) {
        let x = 20 //  the x variable inside the if block is a new variable and it shadows the x variable declared at the top of the script
        console.log('inside a block ' + x)
    }
}
myfun()
console.log(x)
*/

/*
var globalvar = "This is gb variable "
console.log(window.globalvar)

let blockvar = "this is block variable"
console.log(window.blockvar)
*/

/*
for(var  i = 1 ; i <6 ; i++){
    setTimeout(function myfun(){
        console.log(i)
    },100)
} 

for(let j = 5 ; j<10 ; j++){
   setTimeout(()=>(console.log(j),1000))
}

*/

/*  Re declaration
var count = 10; 
var count ;
console.log(count)

 let run = '120km'
 let run ;
 console.log(run)

 */

 {
    console.log(counter); // 
    let counter = 10;    
}