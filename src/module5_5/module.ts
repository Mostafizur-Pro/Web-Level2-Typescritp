export const add = (param1: number, param2: number):number=>{
    return param1 + param2
}

export const subtract = ( param1: number, param2: number):number=>{
    return param1 - param2
}
export const multiply = ( param1: number, param2: number):number=>{
    return param1 * param2
}
const divide = ( param1: number, param2: number):number=>{
    return param1 / param2
}
const average = ( param1: number, param2: number):number=>{
    return (param1 * param2) / 2
}

// export default average
export default {divide, average}