/**
 * 加法
 * @param {*} x 
 * @param {*} y 
 */
const add = (x, y) => x + y

/**
 * 乘法
 * @param {*} x 
 * @param {*} y 
 */
const breed = (x, y) => x * y

/**
 * 减法
 * @param {*} x 
 * @param {*} y 
 */
const subscribe = (x, y) => x - y

/**
 * 除法
 * @param {*} x 
 * @param {*} y 
 */
const divsion = (x, y) => x / y

let a = 10, b = 2, c = 4

console.log(breed(add(divsion(a, b), subscribe(c, b)), divsion(c, b)))
