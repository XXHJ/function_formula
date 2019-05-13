// 接口类型
function ins(obj) {
    console.log(obj.age, obj.label, obj.see);
}
ins({ label: "he", see: "hhh", age: 27 });
function Aren(config) {
    var newsArea = { color: "white", area: 100 };
    if (config.color) {
        newsArea.color = config.color;
    }
    if (config.width) {
        newsArea.area = config.width * config.width;
    }
    return newsArea;
}
console.log(Aren({ color: "bule", width: 20 }));
var P = { x: 10, y: 20, c: 5 };
P.c = 10;
console.log(P);
// 只读数组
var list = [1, 2, 3, 4, 5];
var Arr = list;
var myFunction;
myFunction = function (type, count) {
    if (type) {
        return Boolean(count);
    }
    return false;
};
console.log(myFunction(true, 1), myFunction(false, 1));
var myList;
myList = ["hello", "ts", "js"];
var myItem = myList[1];
console.log(myItem);
