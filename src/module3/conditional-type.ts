// // Conditional Types 
// // (a type is dependent on another type)

// type a1 = number;
// type a2 = a1 extends string ? string : null
// type a3 = string
// type a4 = boolean

// // nested type
// type d = a1 extends null ? null : a3 extends number ? number : a4 extends boolean ? boolean : null

// // result = boolean


// type Sheikh = {
//     son1: string
//     son2: string
// }

// type CheckProperty<T, K> = K extends keyof Sheikh ? true : false

// type CheckSon2 = CheckProperty<Sheikh, 'son1'>

// // result = true


// type Friends = "Ripon" | "Rafiqul" | "Rizvi" | "Rabin"
// type RemoveFriend<T, K> = T extends K ? never : T


// type CurrentFriends = RemoveFriend<Friends, "Rizvi">