// function Created (Cou: Tem, name: string, age: number): Methods { 
//     return new Cou(name, age);
// }
var B = /** @class */ (function () {
    function B(name, age) {
        this.name = name;
        this.age = age;
    }
    B.prototype.tuck = function () {
        console.log('new B()');
    };
    B.prototype.hello = function () {
        console.log(this.age);
    };
    return B;
}());
var b = new B('xiao', 27);
b.tuck();
console.log(b, b.name, b.age);
b.hello();
