// 接口类型

interface label {
  label: string;
  see: string;
  age: number;
}

function ins(obj: label): void {
  console.log(obj.age, obj.label, obj.see);
}
ins({ label: "he", see: "hhh", age: 27 });

interface Le {
  color?: string;
  width?: number;
}

function Aren(config: Le): { color: string; area: number } {
  let newsArea = { color: "white", area: 100 };
  if (config.color) {
    newsArea.color = config.color;
  }
  if (config.width) {
    newsArea.area = config.width * config.width;
  }
  return newsArea;
}
console.log(Aren({ color: "bule", width: 20 }));

interface Float {
  // readonly 只读属性
  readonly x: number;
  readonly y: number;
  c: number;
}

let P: Float = { x: 10, y: 20, c: 5 };
P.c = 10;
console.log(P);

// 只读数组
let list: number[] = [1, 2, 3, 4, 5];
let Arr: ReadonlyArray<number> = list;

interface myFunc {
  (type: boolean, count: number): any;
}

let myFunction: myFunc;
myFunction = function(type, count) {
  if (type) {
    return Boolean(count);
  }
  return false;
};

console.log(myFunction(true, 1), myFunction(false, 1));

interface stringArray {
  [index: number]: string;
}
let myList: stringArray;
myList = ["hello", "ts", "js"];

let myItem: string = myList[1];
console.log(myItem);
