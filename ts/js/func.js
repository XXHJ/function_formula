// 函数
var myAdd = function (x, y) {
    if (x) {
        return y;
    }
    return false;
};
console.log(myAdd("A4L", 24), myAdd(undefined, 0));
// 可选参数与默认参数
var HandAdd = function (x, y, z) { };
function hand(x, y, z) {
    if (z === void 0) { z = 10; }
    if (y) {
        console.log(x + " --- is ---" + y + " --- is --- " + z);
    }
    return "x:" + x + "--y:" + y + "--z:" + z;
}
console.log(hand("hello"));
hand("world", 20);
hand("ledng", 30, 50);
// 剩余参数
function res(firts) {
    var last = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        last[_i - 1] = arguments[_i];
    }
    return firts + "--" + last.join("|");
}
var HandRes = res;
console.log(HandRes("hello", "world", "ni", "hao", "yes"));
