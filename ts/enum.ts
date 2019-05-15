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
