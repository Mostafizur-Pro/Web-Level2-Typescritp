// // Pick
// interface Person {
//     name: string
//     email?: string
//     contactNo: string
// }

// type ContactNo = Pick<Person, 'contactNo'>  // result contactNo
// type Contact = Pick<Person, 'contactNo' | 'email'> // result contactNo & email

// // Omit

// type Name = Omit<Person, 'email' | 'contactNo'>   // result : name


// /*
// Note:
// Pick means received korbe
// Omit means delete korbe
// */

// // Partial
// // TO make all the properties be optional type
// type Optional = Partial<Person>

// // Required
// // To make all the properties not be optional type
// type RequiredProps = Required<Person>


// // Readonly Type
// // kno property change korte dibe na
// const person: Readonly<Person> = {
//     name: "Parsina",
//     email: "abc@gmail.com",
//     contactNo: "123232"
// }

// // person.name = "Forhan"  // readonly thakay edit korte dibe na


// // Record type
// // Using index signature

// // type myObj = {                               // option: 1
// //     a: string
// //     b: string
// //     c: string
// // }

// // type myObj = {                               // option: 2
// //     [key: string] : string
// // }

// // type myObj = Record<string, string>          // option: 3

// type myObj = Record<'a' | 'b'|'c', string>      // option: 4

// const obj: myObj = {
//     a: '1',
//     b: '2',
//     c: '3',
//     // d: '4'               option: 4 ar jonno akhne error asbe
// }

