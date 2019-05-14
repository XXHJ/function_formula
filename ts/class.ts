interface Tem {
  new (name: string, age: number): Methods;
}

interface Methods {
  tuck(): void;
  hello(): void;
}

// function Created (Cou: Tem, name: string, age: number): Methods {
//     return new Cou(name, age);
// }

class B implements Methods {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  tuck() {
    console.log("new B()");
  }
  hello() {
    console.log(this.age);
  }
}

let b = new B("xiao", 27);
b.tuck();
console.log(b, b.name, b.age);
b.hello();

// 继承
interface Aa {
  color: string;
}

interface Ba {
  width: number;
}

interface C extends Aa, Ba {
  length: number;
}

let c = <C>{};
c.color = "red";
c.length = 3;
c.width = 100;

// 混合类型
interface CO {
  (start: number): void;
  inset: number;
  reset(): void;
}

function Go(): CO {
  let cs = <CO>function(start: number): void {};
  cs.inset = 10;
  cs.reset = function() {
    console.log("extends CO");
  };
  return cs;
}

let cc1 = Go();
cc1.reset();
cc1.inset = 20;

// 接口继承类
class Co {
  private state: any;
}

interface Bo extends Co {
  select(): void;
}

class Bu extends Co implements Bo {
  select() {}
}

class Ao extends Co {
  constructor() {
    super();
  }
  select() {}
}

let a = new Ao();
