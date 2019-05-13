interface Tem { 
    new (name: string, age: number): Methods
}

interface Methods { 
    tuck(): void;
    hello(): void;
}

// function Created (Cou: Tem, name: string, age: number): Methods { 
//     return new Cou(name, age);
// }

class B implements Methods { 
    name: string
    age: number
    constructor(name: string, age: number) { 
        this.name = name
        this.age = age
    }
    tuck() { 
        console.log('new B()')
    }
    hello() { 
        console.log(this.age)
    }
}

let b = new B('xiao', 27)
b.tuck()
console.log(b, b.name, b.age)
b.hello()