// class get / set
var At = /** @class */ (function () {
    function At() {
    }
    Object.defineProperty(At.prototype, "foo", {
        //   constructor(foo: string, bar: string) {
        //     this._foo = foo;
        //     this._bar = bar;
        //   }
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
var at = new At();
console.log(at.bar);
console.log(at.foo);
at.bar = "hihao";
at.foo = "ledng";
console.log(at.bar);
console.log(at.foo);
