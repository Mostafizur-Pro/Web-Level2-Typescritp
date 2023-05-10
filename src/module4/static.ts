// class Counter {
//     static counter: number = 0     // static mean fix propertyf

//     // constructor(counter: number){
//     //     this.counter = counter
//     // }

//     static increment(): number{
//         // return (this.counter = this.counter + 1)
//         return (Counter.counter = Counter.counter + 1)
//     }
//     static decrement():number{
//         // return (this.counter = this.counter - 1)
//         return (Counter.counter = Counter.counter - 1)
//     }
// }

// // const instance1 = new Counter()
// // const instance2 =  new Counter()

// // console.log(instance1.increment());
// console.log(Counter.increment());
// // console.log(instance1.decrement());
// console.log(Counter.decrement());