var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
var test = 'heheh';
console.log(test);
var arr = ['1', '2', '4'];
arr.forEach(function (item) {
    console.log(item);
});
var num = 3;
// alert(num)
var list = [function (x) { console.log(x); }];
list.forEach(function (item) {
    item(2);
});
var x = [
    'hello', 27, true, function () {
        console.log('hello world');
    }
];
console.log(x[0], x[3]());
function ev(s) {
    return s === 'ok' ? 1 : 0;
}
console.log(ev('ok'), ev('ok1'));
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Pink"] = "pink";
    Color["Bule"] = "bule";
})(Color || (Color = {}));
var colorList = [];
for (var key in Color) {
    colorList.push(key);
    console.log(key);
}
console.log(colorList);
var snys = 44444;
var anyList = ['hello', 4, function () { }, true, false];
anyList.forEach(function (item) {
    console.log(item);
});
function evs() {
    console.log('没有返回值');
}
evs();
var bnull = null;
var bun = undefined;
console.log(bnull, bun);
function creates(o) {
    console.log(o);
}
creates({ popxy: 'hello', name: 'haha' });
creates(null);
var strNumber = "123456";
// let len: number = (<string>strNumber).length
var len = strNumber.length;
console.log(len);
function error() {
    throw new Error('这是一个错误！');
}
// error()
function show(type) {
    var a = 10;
    if (type) {
        return 10 + a;
    }
    return undefined;
}
console.log(show(true), show());
function cx(type, x) {
    if (x === void 0) { x = 0; }
    if (type) {
        var x_1 = 100;
        return 100;
    }
    return x;
}
console.log(cx(true, 200), cx(false));
var input = ['hello', 'world'];
var first = input[0], last = input[1];
console.log(first, last);
_a = [last, first], first = _a[0], last = _a[1];
console.log(first, last);
function jg(_a) {
    var first = _a[0], last = _a.slice(1);
    console.log.apply(console, [first].concat(last));
}
var ss = [1, 2, 3, 'hh'];
jg(['he', ss]);
var obj = {
    ko: 'ko',
    po: 'po',
    so: 'so'
};
var kos = obj.ko, so = obj.so;
console.log(kos, so);
function types(_a) {
    var a = _a.a, b = _a.b;
    console.log(a, b);
}
types({ a: true, b: 22 });
var firsts = [1, 2];
var second = [3, 4];
var bothPlus = [0].concat(firsts, second, [5]);
console.log(bothPlus);
firsts[1] = 7;
console.log(firsts);
console.log(bothPlus);
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign({}, defaults, { food: "rich", hh: 'hh' });
console.log(search);
