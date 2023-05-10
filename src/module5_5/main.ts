// import {add as addTow, subtract, multiply, divide, average} from './module'
// import * as Methods from './module'
// import average from './module'
import AllMethods from './module'

const add = (param1: number, param2: number, param3: number):number=>{
    return param1 + param2 + param3
}

// const result = Methods.default(2, 4)
const result = AllMethods.divide(2, 4)