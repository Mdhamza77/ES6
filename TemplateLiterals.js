// String Interpolation  

let customer = {name : "Zayn"}
let card = {amount : 80 , product : "DryFruit", qtyprice : 100}
let message = `Hello ${customer.name} want\'s to buy ${card.product} which cost 
price is ${card.amount} sum of total quantity price is ${card.amount * card.qtyprice}`
console.log(message)


const Strings = ["That","Its the","."]
const person = "Mike Tyson"
const age = 22

function my(Strings,personEx,ageEx){
     const st = Strings[0];
     const str = Strings[1];
     const strr = Strings[2]

     const arg = ageEx > 66 ? "Older Age" : "Younger"

     return `${st} ${personEx} ${str} ${ageEx}${strr}`
     
}

console.log(my(Strings,"Jamal",77));