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