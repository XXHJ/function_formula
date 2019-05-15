// 枚举

enum Todos {
  Down,
  Right,
  Up = 1,
  Left = "wo"
}
let s = [];
function tos(str: string, dos: Todos): any {
  console.log(dos);
  return dos;
}
tos("hello", Todos.Up);

enum E {
  A,
  B = tos("he", Todos.Left)
}

console.log(E.B);

// 会依次自动+1
enum E1 {
  A = 1,
  B,
  C,
  D
}
console.log(E1.D);

enum S {
  T,X, Y, Z
}
function f(obj: { X: number }) {
  return obj.X;
}

// Works, since 'E' has a property named 'X' which is a number.
console.log(f(S));

// 反方映射 可以通过默认值来进行反向映射(只能为索引，不能为具体的值)

enum SE {
  A,
  B = "c"
}
let a = SE.A // 0
let b = SE.B
console.log(SE[a], SE[b]);

const enum SS {
  a = 1,
  b,
  c = 2
}
console.log(SS.b) // 2