// 泛型

// 返回一个任意的结果
function func(x: number): any {}

// 返回一个未来的数据类型
function Tag<T>(tar: T): T {
  return tar;
}

let output = Tag<number>(5);
console.log(output);

let input = Tag<string>("hello world");
console.log(input);

let arr = Tag<any[]>([1, "hello", true, function() {}]);
console.log(arr);

// 设置参数可能的类型，返回值可能的类型
function Foo<T>(arr: T[], len: T): T[] | T | Object {
  let sum = 0;
  if (arr.length === 0) {
    return len;
  }
  if (arr.length > 10 && typeof len === "number") {
    sum = len + arr.length;
    return sum;
  }

  return {
    arr,
    len
  };
}

let foo = Foo(["1", 2, "hello"], 4);
console.log(foo);

let bar: <U>(arr: U[], len: U) => U[] | U | Object = Foo;
// 等同于
let bat: { <U>(arr: U[], len: U): U[] | U | Object } = Foo;

console.log(bar([1, 2, 3, "hell"], 6));
// TODO 第一个数组中的项目数据类型一致的时候，会导致后面的泛型的参数类型跟第一个参数一致
console.log(bat(["h", "e", "l", "l", "o", 1], 99));

// 泛型接口
interface TODO<T> {
  <T>(arr: T[], len: T): T[] | T | Object;
}

let Todo: TODO<object> = Foo;

console.log(Todo(["he", 2, true, false], 5));

// 泛型类
class TestTodo<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
let test = new TestTodo<number>();
test.zeroValue = 5;
test.add = (x, y) => x + y;
console.log(test.add(3, 2));

let test1 = new TestTodo<string>();
test1.zeroValue = "hello";
test1.add = (x, y) => x + y;
console.log(test1.add(test1.zeroValue, "world"));

// 泛型约束
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
// 在参数中必需要带有length属性，不管是对象的length和数组的隐式length
loggingIdentity({ length: 5, he: "sss" });
loggingIdentity(["hello"]);

// 在泛型约束中使用类型参数
function SSML<T>(obj: T, key: string | number) {
  return obj[key];
}
let x = { a: "a", b: "b", c: "c" };
console.log(SSML(x, "a"));

class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper: BeeKeeper;
}

class Lion extends Animal {
  keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag; // typechecks!
createInstance(Bee).keeper.hasMask; // typechecks!
