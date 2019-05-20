# 函数式实现 JS 中数组（Array）方法

## [forEach](./array.js) 实现

### 示例定义

```
const forEach = (array, fn) => {
    const len = array.length
    for (let i = 0; i < len; i++) {
        fn(array[i], i, array)
    }
}
```

### 示例测试

```
forEach([1, 'hello', 'world'], (item, index, soe) => {
    console.log(item,'--', index)
});
```

### 返回值

```
1 -- 0
hello -- 1
world -- 2
```

### TODO: 实现 Array 的 forEach 方法，主要是遍历出数组中的每一项元素。传入的参数为数组对象和回调方法

## [map](./array.js) 实现

### 示例定义

```
const map = (array, fn) => {
    let rerult = [];
    const len = array.length
    for (let i = 0; i < len; i++) {
        rerult.push(fn(array[i], i, array))
    }
    return rerult;
}
```

### 示例测试

```
let mapList = map([2, '3', 'hello'], (item, index) => {
    if (index < 1) {
        return {
            name: 'jj',
            item,
            index: index * index
        }
    } else {
        return {
            item,
            index: index * index
        }
    }
});
```

### 返回值

```

```

### TOTO:

## [filter](./array.js) 实现

### 示例定义

```
const filter = (array, fn) => {
    let len = array.length;
    const rerult = [];
    for (let i = 0; i < len; i++) {
        (fn(array[i], i)) ? rerult.push(array[i]) : undefined
    }
    return rerult
};
```

### 示例测试

```
const filterList = filter([1, 2, 3, 4, { name: 'hello' }], (itme, index) => {
    return itme.name
});
```

### 返回值

```

```

### TOTO:

## [concat](./array) 实现

### 示例定义

```
const concat = (array, fn) => {
    let rerult = [];
    let len = array.length;
    for (let i = 0; i < len; i++) {
        rerult.push.apply(rerult, array[i], i);
    }
    return rerult;
}
```

### 示例测试

```
let concatList = [{
    name: '1',
    age: [1, 2, 3]
},
{
    name: '1',
    age: [3, 2, 3]
},
{
    name: '1',
    age: [3, 2, 3]
},
{
    name: '1',
    age: [4, 2, 3]
}
]

let rerult = concat(map(concatList, (item) => {
    return item.age
}))
```

### 返回值

```

```

### TOTO:
