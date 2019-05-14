// 函数

let myAdd: (hello: string, count: number) => any = function(
  x: string,
  y: number
) {
  if (x) {
    return y;
  }
  return false;
};

console.log(myAdd("A4L", 24), myAdd(undefined, 0));

// 可选参数与默认参数
let HandAdd: (x: string, y: string, z: number) => any = function(
  x: string,
  y: string,
  z: number
) {};

function hand(x: string, y?: number, z: number = 10) {
  if (y) {
    console.log(`${x} --- is ---${y} --- is --- ${z}`);
  }
  return `x:${x}--y:${y}--z:${z}`;
}

console.log(hand("hello"));
hand("world", 20);
hand("ledng", 30, 50);
