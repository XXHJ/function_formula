let test: String = "heheh";
console.log(test);

let arr: String[] = ["1", "2", "4"];
arr.forEach(item => {
  console.log(item);
});

let num: Number = 3;
// alert(num)

let list: Function[] = [
  function(x) {
    console.log(x);
  }
];
list.forEach(item => {
  item(2);
});

let x: [string, number, boolean, Function] = [
  "hello",
  27,
  true,
  function(): any {
    console.log("hello world");
  }
];

console.log(x[0], x[3]());

function ev(s: string): number {
  return s === "ok" ? 1 : 0;
}

console.log(ev("ok"), ev("ok1"));

enum Color {
  Red = "red",
  Pink = "pink",
  Bule = "bule"
}

let colorList: string[] = [];
for (let key in Color) {
  colorList.push(key);
  console.log(key);
}
console.log(colorList);

let snys: any = 44444;
let anyList: any[] = ["hello", 4, function() {}, true, false];
anyList.forEach(item => {
  console.log(item);
});

function evs(): void {
  console.log("没有返回值");
}
evs();

let bnull: null = null;
let bun: undefined = undefined;
console.log(bnull, bun);

function creates(o: object | null): void {
  console.log(o);
}
creates({ popxy: "hello", name: "haha" });
creates(null);

let strNumber: any = "123456";
// let len: number = (<string>strNumber).length
let len = (strNumber as string).length;
console.log(len);

function error(): never {
  throw new Error("这是一个错误！");
}

// error()

function show(type?: boolean): Number | undefined {
  let a: number = 10;
  if (type) {
    return 10 + a;
  }
  return undefined;
}

console.log(show(true), show());

function cx(type: boolean, x: number = 0): number {
  if (type) {
    let x = 100;
    return 100;
  }
  return x;
}
console.log(cx(true, 200), cx(false));

const input = ["hello", "world"];
let [first, last] = input;
console.log(first, last);
[first, last] = [last, first];
console.log(first, last);

function jg([first, ...last]: [string, any[]]): void {
  console.log(first, ...last);
}
let ss: any[] = [1, 2, 3, "hh"];
jg(["he", ss]);

let obj = {
  ko: "ko",
  po: "po",
  so: "so"
};

let { ko: kos, so }: { ko: string; so: string } = obj;
console.log(kos, so);

type C = { a: boolean; b?: number };
function types({ a, b }: C): void {
  console.log(a, b);
}
types({ a: true, b: 22 });

let firsts = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...firsts, ...second, 5];
console.log(bothPlus);
firsts[1] = 7;
console.log(firsts);
console.log(bothPlus);

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich", hh: "hh" };
console.log(search);
