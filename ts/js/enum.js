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
var E1;
(function (E1) {
    E1[E1["A"] = 1] = "A";
    E1[E1["B"] = 2] = "B";
    E1[E1["C"] = 3] = "C";
    E1[E1["D"] = 4] = "D";
})(E1 || (E1 = {}));
console.log(E1.D);
