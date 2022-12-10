                           // Expression Body 
var evens = [2,4,6]

odds  = evens.map(v => v + 1)
console.log(typeof odds)
console.log(typeof evens)

// Even Odd Function()
var odd = evens 
pairs = evens.map(v => ({even : v , odd: v+1}))
console.log(pairs)

// Addinf Function in Return type 

var nums = evens.map((v,i) => v + i)
console.log(nums)  
  
                     // Statement Body
nums.forEach(v=>{
    if(nums !=0){
        nums.push(v)
    }
    console.log(nums)
})                     

                 // Lexical This  
//Functions have a special variable this that refers to the object via which the method was invoked.

