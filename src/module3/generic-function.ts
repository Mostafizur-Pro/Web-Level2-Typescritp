// // Array function

// const createArray = (param: string): string[]=>{
//     return [param]
// }
// // const createArray1 = <X>(param: X): X[]=>{
// const createArray1 = <X, Y>(param1: X, param2: Y): [X,Y]=>{
//     return [param1, param2]
// }

// const result1 = createArray1<string, string>("Bangladesh", "I love")
// // const result2 = createArray1<boolean,[string] >(true, ['USA'])
// const result2 = createArray1<boolean,Array<string> >(true, ['USA'])

// type Name = {name: string}
// // const result3 = createArray1<object>({name: "Bangladesh"})
// const result3 = createArray1<Name, Name>({name: "Bangladesh"},{name: "Bangladesh"})


// // Spread operator

// // const newData = {...myInfo, crush}

// const addMeInMyCrushMind = <T>(myInfo: T)=>{
//     const crush = "kate winslet"
//     const newData = {...myInfo, crush}  
//     return newData
// }

// const myInfo = {
//     name: "Persina",
//     age: 100,
//     salary: 100000
// }


// const result4 = addMeInMyCrushMind(myInfo)  // akhne sudu crush ar name ta asbe:



// Arroy Function

const createArray = (param: string): string[]=>{
    return [param]
}
// const createArray1 = <X>(param: X): X[]=>{
const createArray1 = <X, Y>(param1: X, param2: Y): [X,Y]=>{
    return [param1, param2]
}

function createArray2 <X, Y>(param1: X, param2: Y): [X,Y]{
    return [param1, param2]
}