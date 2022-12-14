class math {
    constructor(x,y,z) {
        this.x = x ;
        this.y = y
        this.z = z
        return x*y*z ;
    }   
} 



const ad = new math(1,2,4)
console.log(ad)

//
class person {
    name ;
    constructor(name){
        this.name = name
    }
    def(){
        console.log(`This Person details ${this.name} ${this.teaches} `)
    }
}

// Inheritance
class student extends person {
        teaches ; 
        #year ;
        constructor(name,teaches,year) {
            super(name);
            this.teaches = teaches
            this.#year = year
            
        }
        deff(){
            console.log(`This following student ${this.name} studies  ${this.teaches} in extra classes`)
        }
        age(){
            return this.#year > 1;     
           }
        
}

const hamza = new student('Hamza','biology',6)
hamza.def()

// getter and setter.

class Rectangle {
    constructor (width, height) {
        this._width  = width
        this._height = height
    }
    set width  (width)  { this._width = width               }
    get width  ()       { return this._width                }
    set height (height) { this._height = height             }
    get height ()       { return this._height               }
    get area   ()       { return this._width * this._height }
}
var r = new Rectangle(50, 20) ; console.log(r) 
r.area === 1000 ; 
