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
// function Created (Cou: Tem, name: string, age: number): Methods {
//     return new Cou(name, age);
// }
var B = /** @class */ (function () {
    function B(name, age) {
        this.name = name;
        this.age = age;
    }
    B.prototype.tuck = function () {
        console.log("new B()");
    };
    B.prototype.hello = function () {
        console.log(this.age);
    };
    return B;
}());
var b = new B("xiao", 27);
b.tuck();
console.log(b, b.name, b.age);
b.hello();
var c = {};
c.color = "red";
c.length = 3;
c.width = 100;
function Go() {
    var cs = function (start) { };
    cs.inset = 10;
    cs.reset = function () {
        console.log("extends CO");
    };
    return cs;
}
var cc1 = Go();
cc1.reset();
cc1.inset = 20;
// 接口继承类
var Co = /** @class */ (function () {
    function Co() {
    }
    return Co;
}());
var Bu = /** @class */ (function (_super) {
    __extends(Bu, _super);
    function Bu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bu.prototype.select = function () { };
    return Bu;
}(Co));
var Ao = /** @class */ (function (_super) {
    __extends(Ao, _super);
    function Ao() {
        return _super.call(this) || this;
    }
    Ao.prototype.select = function () { };
    return Ao;
}(Co));
var a = new Ao();
