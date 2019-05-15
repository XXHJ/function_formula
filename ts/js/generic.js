// 泛型
// 返回一个任意的结果
function func(x) { }
// 返回一个未来的数据类型
function Tag(tar) {
    return tar;
}
var output = Tag(5);
console.log(output);
var input = Tag("hello world");
console.log(input);
var arr = Tag([1, "hello", true, function () { }]);
console.log(arr);
// 设置参数可能的类型，返回值可能的类型
function Foo(arr, len) {
    var sum = 0;
    if (arr.length === 0) {
        return len;
    }
    if (arr.length > 10 && typeof len === "number") {
        sum = len + arr.length;
        return sum;
    }
    return {
        arr: arr,
        len: len
    };
}
var foo = Foo(["1", 2, "hello"], 4);
console.log(foo);
var bar = Foo;
// 等同于
var bat = Foo;
console.log(bar([1, 2, 3, "hell"], 6));
// TODO 第一个数组中的项目数据类型一致的时候，会导致后面的泛型的参数类型跟第一个参数一致
console.log(bat(["h", "e", "l", "l", "o", 1], 99));
var Todo = Foo;
console.log(Todo(["he", 2, true, false], 5));
