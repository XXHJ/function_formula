
/**
 * Array => forEach
 * @param {*} array 
 * @param {*} fn 
 */
export const forEach = (array, fn) => { 
 let len = array.length
 for (let i = 0; i < len; i++) {
   fn(array[i])
 }
}

/**
 * 条件执行
 * @param {*} flag 
 * @param {*} fn 
 */
export const is = (flag, fn) => { 
 if (flag) fn()
}

/**
 * Object => for in 
 * @param {*} object 
 * @param {*} fn 
 */
export const forObject = (object, fn) => {
for (let key in object) {
  fn(key, object[key])
 }
}
