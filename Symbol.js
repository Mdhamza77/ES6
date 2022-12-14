// Symbol Type


const foo = Symbol()
const bar = Symbol()
console.log(typeof foo, foo)
console.log(typeof bar)

let obj = {}
obj[foo] = "foo"
obj[bar] = "bar"
console.log(typeof obj,obj)

console.log(JSON.stringify(obj)) // {}
Object.keys(obj) // []
Object.getOwnPropertyNames(obj) // []
Object.getOwnPropertySymbols(obj) 


// Iterators     

var Myarr = ['Map','Index','LastIdex','Includes']

function Itr(values) {
    let index = 0 
    return   {
        next : function arr() {
            if(index < values.length)  {
                return {
                   value : values[index++] ,
                   done : false
            
                }
        }
            else {
                return { 
                     done : true
                }
            }

        }
    }
}

const result = Itr(Myarr) 
console.log(result.next())

