// 定义
const forEach = (array, fn) => {
    const len = array.length
    for (let i = 0; i < len; i++) {
        fn(array[i], i, array)
    }
}

// 测试
forEach([1, 'hello', 'world'], (item, index, soe) => {
    console.log(item, index)
});

const map = (array, fn) => {
    let rerult = [];
    const len = array.length
    for (let i = 0; i < len; i++) {
        rerult.push(fn(array[i], i, array))
    }
    return rerult;
}

// 测试
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

console.log(mapList)

// 定义
const filter = (array, fn) => {
    let len = array.length;
    const rerult = [];
    for (let i = 0; i < len; i++) {
        (fn(array[i], i)) ? rerult.push(array[i]): undefined
    }
    return rerult
};

// 测试
const filterList = filter([1, 2, 3, 4, { name: 'hello' }], (itme, index) => {
    return itme.name
});
console.log(filterList);

// 定义
const concat = (array, fn) => {
    let rerult = [];
    let len = array.length;
    for (let i = 0; i < len; i++) {
        rerult.push.apply(rerult, array[i], i);
    }
    return rerult;
}


// 测试
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
console.log(rerult);

// 定义
const reduce = (array, fn) => {

}

// 测试