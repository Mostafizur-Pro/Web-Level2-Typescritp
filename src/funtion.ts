// Normal function

// function add(num1: number, num2: number): number{
//     return num1 + num2
// }

// add(10, 20)

// Array Function
// const addArray = (num1: number, num2: number):number => num1 + num2

// const arr = [1, 2, 3, 4]
// const newArray = arr.map((elem: number)=>elem * elem)
// const person: {
//     name: string;
//     balance: number;
//     // addBalance(money: number): number;
//     // addBalance(money: number): string;
//     addBalance(money: number): void;
// } = {
//     name: "Mostafizur",
//     balance: 5,
//     addBalance(money: number){
//         // return this.balance+money
//         // return `My new balance is ${this.balance + money}`
//         console.log(`My new balance is ${this.balance + money}`)
//     }
// }


// // default parameter
// function add(num1: number, num2: number = 10): number{
//     return num1 + num2
// }

// // add(10, 20)
// add(10)


// spread opearator

// const myFriends = ["chandler", "joey", 'ross']
// const newFriends = ["monica", 'rachel', 'pheobe']

// myFriends.push(...newFriends)

// resutl : ["chandler", "joey", 'ross', "monica", 'rachel', 'pheobe']


// normal function

// const greetFriends = (
//     friend1: string, friend2: string, friend3: string
// ):void => console.log(`Hi ${friend1}\n Hi ${friend2}\n Hi ${friend3}\n `);

// greetFriends("kashem", "hashem", "gashem")

// result: 
// Hi kashem
// Hi hashem
// Hi gashem

// Rest paremeter 

// const greetFriends = ( ...friends: string[]):void => console.log(friends);
// const greetFriends = ( ...friends: string[]):void => 
// friends.forEach(friend => console.log(`Hi ${friend}`);)

// greetFriends("kashem", "hashem", "gashem", 'lashem', 'bangla bhai')

// Rest peremeter must be array type

// result: 
// Hi kashem
// Hi hashem
// Hi gashem
// Hi lashem
// Hi bangla bhai


// Destructuring

const myFriends = ["chandler", "joey", 'ross']
const newFriends = ["monica", 'rachel', 'pheobe']

const myBestFriend = {
    fullName: "Abul Bashar",
    age: 24
}

const [bestFriend] = myFriends
// [bestFriend] auto string nibe. karon myFriends string a ase

const {fullName} = myBestFriend
// {fullName} auto string a ase. 
// karon myBestFriend ar modde fullName ta string a ase


// const {fullName : string} = myBestFriend
const {fullName : myName} = myBestFriend
console.log({myName});

// console.log fullName: myName dewar karon a fullName ar thakbe na. 
// tokhon fullName ta replies hoye myName hobe. 
// Ai rokom code likhbo na