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
// class get / set
var At = /** @class */ (function () {
    function At(foo, bar) {
        this._foo = foo;
        this._bar = bar;
    }
    Object.defineProperty(At.prototype, "foo", {
        get: function () {
            return this._foo;
        },
        set: function (_foo) {
            this._foo = _foo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(At.prototype, "bar", {
        get: function () {
            return this._bar;
        },
        set: function (_bar) {
            this._bar = _bar;
        },
        enumerable: true,
        configurable: true
    });
    return At;
}());
var at = new At("hello", "world");
console.log(at.bar);
console.log(at.foo);
at.bar = "hihao";
at.foo = "ledng";
console.log(at.bar);
console.log(at.foo);
var Crid = /** @class */ (function () {
    function Crid() {
    }
    Crid.prototype.getOrigin = function (point) {
        var pagex = 0, pagey = 0;
        pagex = Crid.origin.x + point.x;
        pagey = Crid.origin.y + point.y;
        return {
            pagex: pagex,
            pagey: pagey
        };
    };
    Crid.origin = {
        x: 1,
        y: 5
    };
    return Crid;
}());
var crid1 = new Crid();
var crid2 = new Crid();
console.log(crid1.getOrigin({ x: 12, y: 10 }));
console.log(crid2.getOrigin({ x: 111, y: 100 }));
// 抽象类 abstract
var Department = /** @class */ (function () {
    function Department() {
        this.name = "hello";
    }
    // constructor(public name: string) {}
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this) || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
var department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在
var Dom = /** @class */ (function () {
    function Dom() {
    }
    Dom.prototype.mt = function () {
        console.log("is then Dom");
    };
    return Dom;
}());
var Dt = /** @class */ (function (_super) {
    __extends(Dt, _super);
    function Dt() {
        return _super.call(this) || this;
    }
    Dt.prototype.move = function (speed) {
        console.log("is then " + speed);
    };
    Dt.prototype.ms = function () {
        console.log("is ms");
    };
    return Dt;
}(Dom));
var dt = new Dt();
dt.move("hello world");
dt.mt();
