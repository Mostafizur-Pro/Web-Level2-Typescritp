// Normal Function
// const rollNumbers1: number[] = [1, 4, 5]      //system-1
// const rollNumbers2: Array<number> = [1, 4, 5] //system-2

// const rollNumbers3: string[] = ["1", "4", "5"] //system-1
// const rollNumbers4: Array<string> = ["1", "4", "5"] //system-2

// const roolNumbers5: Array<Boolean> = [true, false]

// const userNameAndRollNumber: Array<{name: string, roll: number}> = [{
//     name: 'Mr. X',
//     roll: 1
// },{
//     name: "Mr. Y",
//     roll: 2
// }]


// Generic Type

// type GenericArray<T> = Array<T>  // dynamicly T dewa hoise jekhon string hoile string

// const rollNumbers2: GenericArray<number> = [1, 4, 5] //system-2
// const rollNumbers4: GenericArray<string> = ["1", "4", "5"] //system-2
// const roolNumbers5: GenericArray<Boolean> = [true, false]

// type NameRoll ={
//     name: string,
//     roll: number
// }

// // const userNameAndRollNumber: GenericArray<{name: string, roll: number}> = [{
// const userNameAndRollNumber: GenericArray<NameRoll> = [{
//     name: 'Mr. X',
//     roll: 1
// },{
//     name: "Mr. Y",
//     roll: 2
// }]

// type GenericTuple<X,Y>=[X,Y]
// const relation: GenericTuple<string, string> = ["Persian", 'Winslet'];

// const relationWithSalary: GenericTuple<{name: string, salary: number}, string> =[
//     {
//         name: "Persina",
//         salary: 1000
//     },    "Winslet"
// ]

// Generic in Interface
// type GenericTuple<X,Y>=[X,Y]

// interface RelationWithSalaryInterface {
//     name: string,
//     salary: number
// }

// const relationWithSalary: GenericTuple<RelationWithSalaryInterface, string>=[{
//             name: "Persina",
//                 salary: 1000
//             },    "Winslet"
// ] 

// interface ta sob somoy object ar opor a hobe
