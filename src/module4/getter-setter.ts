// class BankAccount{
//     public readonly id: number
//     public name: string
//     protected _balance: number  

//     constructor(id:number, name: string, balance: number){
//         this.id = id
//         this.name = name
//         this._balance = balance
//     }

//     // getter
//     get balance (): number{
//         return this._balance
//     }

//     // getbalance(){
//     //     console.log(`My Current Balance is: ${this._balance}`);
//     // }

//     // setter
//     set deposit(amount: number){
//         this._balance = this._balance + amount
//     }
//     // addDeposite(amount: number){
//     //     this._balance = this._balance + amount
//     // }
// }

// const myAccount = new BankAccount(333, "Persian", 20)
// // myAccount.balance=0
// console.log(myAccount);
// myAccount.deposit= 30
// console.log(myAccount.balance);