// 枚举
var Todos;
(function (Todos) {
    Todos[Todos["Down"] = 0] = "Down";
    Todos[Todos["Right"] = 1] = "Right";
    Todos[Todos["Up"] = 1] = "Up";
    Todos["Left"] = "wo";
})(Todos || (Todos = {}));
var s = [];
function tos(str, dos) {
    console.log(dos);
    return dos;
}
tos("hello", Todos.Up);
var E;
(function (E) {
    E[E["A"] = 0] = "A";
    E[E["B"] = tos("he", Todos.Left)] = "B";
})(E || (E = {}));
console.log(E.B);
// 会依次自动+1
var E1;
(function (E1) {
    E1[E1["A"] = 1] = "A";
    E1[E1["B"] = 2] = "B";
    E1[E1["C"] = 3] = "C";
    E1[E1["D"] = 4] = "D";
})(E1 || (E1 = {}));
console.log(E1.D);
var S;
(function (S) {
    S[S["T"] = 0] = "T";
    S[S["X"] = 1] = "X";
    S[S["Y"] = 2] = "Y";
    S[S["Z"] = 3] = "Z";
})(S || (S = {}));
function f(obj) {
    return obj.X;
}
// Works, since 'E' has a property named 'X' which is a number.
console.log(f(S));
// 反方映射 可以通过默认值来进行反向映射(只能为索引，不能为具体的值)
var SE;
(function (SE) {
    SE[SE["A"] = 0] = "A";
    SE["B"] = "c";
})(SE || (SE = {}));
var a = SE.A; // 0
var b = SE.B;
console.log(SE[a], SE[b]);
console.log(2 /* b */);
