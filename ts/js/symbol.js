let symb = Symbol();
let symbKey = Symbol("key");
let symbKey2 = Symbol("key");
console.log(symbKey === symbKey2); // false
let list = [1, "hello", true];
for (let key in list) {
    console.log(list[key], key);
}
for (let k of list) {
    console.log(k);
}
let obj = {
    // [Symbol.iterator]() 无此方法 所以无法 for of
    name: "hello",
    sex: 1,
    age: 27,
    [Symbol.iterator]() {
        let index = 0;
        const arr = [];
        for (let key in this) {
            arr.push(this[key]);
        }
        return {
            next() {
                if (index < arr.length) {
                    return {
                        value: arr[index++],
                        done: false
                    };
                }
                else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};
for (let k of obj) {
    // 实现自定义得 for of 方法
    console.log(k);
}
let li = ["1", "2", "1", "3"];
let set = new Set(li);
console.log(set);
