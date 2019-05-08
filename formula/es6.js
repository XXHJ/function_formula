import {forEach, is } from '../lib/index.js'

forEach([1, 2, 3, 4], data => { 
 is(data % 2 === 0, () => { 
  console.log(data)
 })
})