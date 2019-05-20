# 函数式实现 JS 中数组（Array）方法

## [forEach](./array.js) 实现

###示例定义
const forEach = (array, fn) => {
const len = array.length
for (let i = 0; i < len; i++) {
fn(array[i], i, array)
}
}

###示例测试
forEach([1, 'hello', 'world'], (item, index, soe) => {
console.log(item,'--', index)
});

###返回值
1 -- 0
hello -- 1
world -- 2

###TODO: 实现 Array 的 forEach 方法，主要是遍历出数组中的每一项元素。传入的参数为数组对象和回调方法
