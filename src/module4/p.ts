






// // Problem-4
// class Person{
//     private name: string
//     private age: number
//     constructor(name: string, age: number){
//         this.name = name
//         this.age = age
//     }
//     public getDetails(){
//         console.log(`My name is ${this.name} and age is ${this.age}`);
//     }

// }

// class Student extends Person{
//     private grade : string
//     constructor(name:string, age: number, grade: string){
//         super(name, age)
//         this.grade = grade
//     }
//     public getGrade(){
//        return`The grade is ${this.grade}`
//     }
// }

// const studnet = new Student("Mr. X", 27, "A+")
// console.log(studnet);



// // typeof guard

// type apple = any

// function add(a:apple):void{
//     if(typeof a === "string"){
//         console.log(a);
//     }else{
//         console.log('This parameter not a string');
//     }
// }

// add("Banana")
// add(123)







// // // function getData(name:string, repeat: number = 3):number{
// // //  if(typeof repeat === "number"){
// // //     return repeat
// // //  }
// // //  if else(typeof repeat === 'string'){
// // // return repeat = 3
// // //  }
// // //  else{

// // //  }
// // // }


// // // const result = getData('mostafizur',  "h")
// // // console.log(result);


// // // const repeatedString = (name: string, repeatNo: number = 3)=>{
// // //     if(repeatNo > 0){
// // //         return name.repeat(repeatNo)
// // //     }
// // // }
// // // const result=repeatedString('abc', 4)
// // // console.log(result);


// // type Person ={
// //     name:string
// //     age: number
// // }

// // const getPerson = (users: Person[])=>{
// //     users.map(user =>{
// //         if(user.age >= 18){
// //             console.log(user);
// //             return user
// //         }
// //     })

// // }

// // const newUser = getPerson([{name: 'Mostafiz', age: 27},{name:'Rafin', age:16}])
// // // console.log(newUser);


// type Person ={
//     name: string
//     age: number
// }

// const getUser= (users:Person[])=>{
//     let newUser: Array<object>=[]
//     users.forEach(user=>{
//         if(user.age >= 18){
//             newUser.push(user)
//         }
//     })
//     return newUser

// }

// const newUser = getUser([{name: "Mostafizur", age: 15}, {name: "Rafin", age: 27}])
// console.log(newUser);




interface Person {
    name: string
    age: number
}

function getPerson (users: Person[]):object{        
return {
    newUser:{} = users.filter(user=> user.age >= 18)
}}

const people: Person[]=[
    {name: 'Rafin', age: 15}, 
    {name: 'Robin', age:27}, 
    {name: "Mostafiz", age: 30},
    {name: "Ripon", age: 17}
]

const result = getPerson(people)
console.log(result);