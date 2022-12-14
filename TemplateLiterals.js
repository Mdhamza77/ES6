// String Interpolation  

let customer = {name : "Zayn"}
let card = {amount : 80 , product : "DryFruit", qtyprice : 100}
let message = `Hello ${customer.name} want\'s to buy ${card.product} which cost 
price is ${card.amount} sum of total quantity price is ${card.amount * card.qtyprice}`
console.log(message)

// Practice Template
const Strings = ["That","Its the","."]
const person = "Mike Tyson"
const age = 22

function my(Strings,personEx,ageEx){
     const st = Strings[0];
     const str = Strings[1];
     const strr = Strings[2]

     const arg = ageEx > 66 ? "Older Age" : "Younger"

     return `${st} ${personEx} ${str} ${ageEx}${strr} ${arg}`
     
}
console.log(my(Strings,"Jamal",77))



// Raw String Access  
const filePath = String.raw`C:\Development\profil\about.html`;

console.log(`The file was uploaded from: ${filePath}`);
// Custom Interpolation  
const bar = 55 
const baz = 55 
const quu = "This is to check Custom interpolation using String Literals" 
console.log(`http://example.com/foo?bar=${bar + baz}&quux=${quu}`)


