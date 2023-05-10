// class Parent {
//     name: string
//     age: number
//     address: string

//     constructor(name: string, age: number, address: string){
//         this.name = name
//         this.age = age
//         this.address = address
//     }

//     makeSleep(hours: number):string{
//         return `This ${this.name} will sleep for ${hours}`
//     }
// }

// class Student extends Parent {
//     // name: string;    // age: number;    // address: string

//     constructor(name: string, age: number, address: string){
//         super(name, age, address)   // name, age, address hosse ai property r na. Parent ar
//     //     this.name = name
//     //     this.age = age
//     //     this.address = address
//     }

//     // makeSleep(hours: number):string{
//     //     return `This ${this.name} will sleep for ${hours}` }
// }

// const student1 = new Student("Mostafiz", 27, "Dhamrai")
// student1.makeSleep(6)

// class Teacher extends Parent{
//     designation: string

//     constructor(name:string, age: number, address: string, designation: string){
//         super(name, age, address)
//         this.designation = designation
//     }

//     takeClasses(numOfClass: number): string{
//         return  `This ${this.name} will take ${numOfClass} classes`
//     }
// }

// const teacher1 = new Teacher("Mostafiz", 27, "Dhamrai", 'Teacher')
// teacher1.makeSleep(6)