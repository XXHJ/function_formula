/**
 * 数据检查，全部通过才返回true
 * @param {*} arr 
 * @param {*} fn 
 */
const some = (arr, fn) => {
    let result = true,
        len = arr.length
    for (let i = 0; i < len; i++) {
        result = result && fn(arr[i])
    }
    return result
}

/**
 * 数据检查，只要有一项合格就返回true
 * @param {*} arr 
 * @param {*} fn 
 */
const every = (arr, fn) => {
    let result = false,
        len = arr.length
    for (let i = 0; i < len; i++) {
        result = result || fn(arr[i])
    }
    return result
}

/**
 * 排序
 * @param {*} property 
 */
const sort = (property) => {
    return (a, b) => {
        let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0
        return result
    }
}

console.log([{ name: '1' }, { name: '3' }, { name: '2' }].sort(sort('name')))

// 只允许执行一次函数
const once = (fn) => {
    let done = false
    return () => {
        return done ? undefined : ((done = true), fn.apply(this, arguments))
    }
}

let one = once(() => console.log('111'))
one() // 有效
one() // 无效

// 实现数据存储记忆功能
const memoized = (fn) => {
    let lookupTable = {}
    return (arg) => lookupTable[arg] || (lookupTable[arg] = fn(arg))
}
let mome = memoized((n) => {
    if (n === 0) return 1
    return n * mome(n - 1)
})

console.log(mome(5), mome(6))