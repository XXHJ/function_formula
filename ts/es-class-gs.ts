// class get / set

class At {
  private _foo: string;
  private _bar: string;
  constructor(foo: string, bar: string) {
    this._foo = foo;
    this._bar = bar;
  }

  get foo(): string {
    return this._foo;
  }
  get bar(): string {
    return this._bar;
  }

  set foo(_foo: string) {
    this._foo = _foo;
  }
  set bar(_bar: string) {
    this._bar = _bar;
  }
}

let at = new At("hello", "world");
console.log(at.bar);
console.log(at.foo);
at.bar = "hihao";
at.foo = "ledng";
console.log(at.bar);
console.log(at.foo);

// 静态属性 static
interface Point {
  x: number;
  y: number;
}

class Crid {
  static origin = {
    x: 1,
    y: 5
  };

  getOrigin(point: Point): Object {
    let pagex = 0,
      pagey = 0;

    pagex = Crid.origin.x + point.x;
    pagey = Crid.origin.y + point.y;

    return {
      pagex,
      pagey
    };
  }
}
let crid1 = new Crid();
let crid2 = new Crid();
console.log(crid1.getOrigin({ x: 12, y: 10 }));
console.log(crid2.getOrigin({ x: 111, y: 100 }));

// 抽象类 abstract

abstract class Department {
  name: string = "hello";
  // constructor(public name: string) {}

  printName(): void {
    console.log("Department name: " + this.name);
  }

  abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {
  constructor() {
    super(); // super("Accounting and Auditing"); // 在派生类的构造函数中必须调用 super()
  }

  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }

  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}

let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在

abstract class Dom {
  abstract move(speed: string): void;
  mt(): void {
    console.log("is then Dom");
  }
}

class Dt extends Dom {
  constructor() {
    super();
  }
  move(speed: string): void {
    console.log(`is then ${speed}`);
  }

  ms() {
    console.log("is ms");
  }
}

let dt: Dom = new Dt();
dt.move("hello world");
dt.mt();
// dt.ms();
