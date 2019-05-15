var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// 泛型类
var TestTodo = /** @class */ (function () {
    function TestTodo() {
    }
    return TestTodo;
}());
var test = new TestTodo();
test.zeroValue = 5;
test.add = function (x, y) { return x + y; };
console.log(test.add(3, 2));
var test1 = new TestTodo();
test1.zeroValue = "hello";
test1.add = function (x, y) { return x + y; };
console.log(test1.add(test1.zeroValue, "world"));
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
// 在参数中必需要带有length属性，不管是对象的length和数组的隐式length
loggingIdentity({ length: 5, he: "sss" });
loggingIdentity(["hello"]);
// 在泛型约束中使用类型参数
function SSML(obj, key) {
    return obj[key];
}
var x = { a: "a", b: "b", c: "c" };
console.log(SSML(x, "a"));
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag; // typechecks!
createInstance(Bee).keeper.hasMask; // typechecks!
