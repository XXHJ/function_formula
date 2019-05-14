// 基础类
class Ge {
  band: string;
  constructor(band: string) {
    this.band = band;
  }
  tuck(): string {
    return this.band;
  }
}
let ge = new Ge("ximengsi");
console.log(ge.tuck());

// 实现继承
class G extends Ge {
  tick(): string {
    return this.tuck();
  }
}
let g = new G("zhiban");
console.log(g.tick());

// 多个子类继承一个父类
class As {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  sayName(): void {
    console.log(`${this.name} - sayName - ${this.age}`);
  }
}
class Cs extends As {
  constructor(name: string, age: number) {
    super(name, age);
  }
  sayName(): void {
    console.log("Cs");
    super.sayName();
  }
}

class Ds extends As {
  constructor(name: string, age: number) {
    super(name, age);
  }
  sayName(): void {
    console.log("Ds");
    super.sayName();
  }
}

let cs = new Cs("xx", 22);
let ds: As = new Ds("ledng", 27);

cs.sayName();
ds.sayName();

class Bs {
  private sex: boolean; // 私有属性
  protected ledng: string; // 其派生类内部可以使用, 但是派生类和基类的实例上无法直接使用
  add: string;

  // constructor 使用 protected 之后，只能被派生类继承，不能进行实例化
  protected constructor(sex: boolean, add: string, ledng: string) {
    this.sex = sex;
    this.add = add;
    this.ledng = ledng;
  }
}

// let bs = new Bs(true, "hello", "ledng");
// console.log(bs.add);

class Es extends Bs {
  // 设置为只读
  readonly exit: string;
  constructor(sex: boolean, add: string, ledng: string) {
    super(sex, add, ledng);
    this.exit = ledng;
  }
  sayName(): void {
    console.log(`${this.ledng}是一个什么`);
  }
}

let es = new Es(false, "xx", "ledng");
es.sayName();
