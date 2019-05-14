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
// 基础类
var Ge = /** @class */ (function () {
    function Ge(band) {
        this.band = band;
    }
    Ge.prototype.tuck = function () {
        return this.band;
    };
    return Ge;
}());
var ge = new Ge("ximengsi");
console.log(ge.tuck());
// 实现继承
var G = /** @class */ (function (_super) {
    __extends(G, _super);
    function G() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    G.prototype.tick = function () {
        return this.tuck();
    };
    return G;
}(Ge));
var g = new G("zhiban");
console.log(g.tick());
// 多个子类继承一个父类
var As = /** @class */ (function () {
    function As(name, age) {
        this.name = name;
        this.age = age;
    }
    As.prototype.sayName = function () {
        console.log(this.name + " - sayName - " + this.age);
    };
    return As;
}());
var Cs = /** @class */ (function (_super) {
    __extends(Cs, _super);
    function Cs(name, age) {
        return _super.call(this, name, age) || this;
    }
    Cs.prototype.sayName = function () {
        console.log("Cs");
        _super.prototype.sayName.call(this);
    };
    return Cs;
}(As));
var Ds = /** @class */ (function (_super) {
    __extends(Ds, _super);
    function Ds(name, age) {
        return _super.call(this, name, age) || this;
    }
    Ds.prototype.sayName = function () {
        console.log("Ds");
        _super.prototype.sayName.call(this);
    };
    return Ds;
}(As));
var cs = new Cs("xx", 22);
var ds = new Ds("ledng", 27);
cs.sayName();
ds.sayName();
var Bs = /** @class */ (function () {
    // constructor 使用 protected 之后，只能被派生类继承，不能进行实例化
    function Bs(sex, add, ledng) {
        this.sex = sex;
        this.add = add;
        this.ledng = ledng;
    }
    return Bs;
}());
// let bs = new Bs(true, "hello", "ledng");
// console.log(bs.add);
var Es = /** @class */ (function (_super) {
    __extends(Es, _super);
    function Es(sex, add, ledng) {
        return _super.call(this, sex, add, ledng) || this;
    }
    Es.prototype.sayName = function () {
        console.log(this.ledng + "\u662F\u4E00\u4E2A\u4EC0\u4E48");
    };
    return Es;
}(Bs));
var es = new Es(false, "xx", "ledng");
es.sayName();
