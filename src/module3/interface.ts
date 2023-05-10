// // Type alias
// type User = {
//     name: string;
//     age: number
// }

// type ExtendUser= User &{
//     role: string
// }

// const user1: ExtendUser = {
//     name: 'Mostafiz',
//     age: 12,
//     role:"Unknown"
// }

// // Type interface
 
// interface IUser {
//     name: string;
//     age: number
// }

// interface IExtendedUser extends IUser{
//     role: string
// }


// const user2: IExtendedUser = {
//     name: 'Mostafiz',
//     age: 12,
//     role:"Unknown"
// }


// type addNumbersType = (num1:number, num2: number) => number;

// interface IAddNumbers{
//     (num1: number, num2: number): number
// }

// type roolNumbersType = number[]
// interface IRollnumbers{
//     [index: number]: number
// }

// const rollNumbers: IRollnumbers = [1,3,4]; //[index]


// const addNumbers: addNumbersType = (num1, num2)=> num1 + num2